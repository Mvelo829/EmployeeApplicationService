using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using EmployeeeApplication.Domain.Addresses;
using EmployeeeApplication.Domain.Persons;
using EmployeeeApplication.Services.PersonService.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeeApplication.Services.PersonService
{
    public class PersonAppService : AsyncCrudAppService<Person, CreatePersonDto, string, PagedAndSortedResultRequestDto, CreatePersonDto>, IPersonAppService
    {
        private readonly IRepository <Address,Guid> _addressRepository;
        private readonly IRepository<Person, string> _repository;
        public PersonAppService(IRepository<Person, string> repository, IRepository<Address, Guid> addressRepository) : base(repository)
        {
            _addressRepository = addressRepository;
            _repository =  repository;
        }

        public override async Task<CreatePersonDto> CreateAsync(CreatePersonDto input)
        {
            var person = ObjectMapper.Map<Person>(input);
            person.Address = await CreateOrUpdateAddressAsync(input); ;
            person = await _repository.InsertAsync(person);
            return ObjectMapper.Map<CreatePersonDto>(person);
        }

        public override async Task<CreatePersonDto> UpdateAsync(CreatePersonDto input)
        {
            var person = await _repository.GetAllIncluding(x=>x.Address).FirstOrDefaultAsync(x=>x.Id == input.Id);
            person.Address = await CreateOrUpdateAddressAsync(input);
            ObjectMapper.Map(input, person);
            person = await _repository.UpdateAsync(person);
            return ObjectMapper.Map<CreatePersonDto>(person);
        }

        public override async Task<PagedResultDto<CreatePersonDto>> GetAllAsync(PagedAndSortedResultRequestDto input)
        {
            var query = await _repository.GetAllIncludingAsync(x => x.Address);
            query = ApplySorting(query, input);
            var pagedResult = query.PageBy(input.SkipCount, input.MaxResultCount);
            var persons = ObjectMapper.Map<List<CreatePersonDto>>(pagedResult);
            return await Task.FromResult(new PagedResultDto<CreatePersonDto>(
                                   totalCount: pagedResult.Count(),
                                   items: persons
                               ));
        }

        public override async Task<CreatePersonDto> GetAsync(EntityDto<string> input)
        {
            var person = await _repository.GetAllIncluding(x=>x.Address).FirstOrDefaultAsync(x=>x.Id == input.Id);
            return ObjectMapper.Map<CreatePersonDto>(person);
        }

        private async Task<Address> CreateOrUpdateAddressAsync(CreatePersonDto input)
        {
            var person = await _repository.GetAllIncluding(x => x.Address).FirstOrDefaultAsync(x => x.Id == input.Id);
            var address = person?.Address;
            if(address == null)
            {
                address = ObjectMapper.Map<Address>(input);
                address = await _addressRepository.InsertAsync(address);
            }
            else
            {
                ObjectMapper.Map(input, address);
                address =  await _addressRepository.UpdateAsync(address);
            }
            return address;
        }

    }
}
