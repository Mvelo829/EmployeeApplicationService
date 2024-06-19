using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using EmployeeeApplication.Domain.Addresses;
using EmployeeeApplication.Services.Addresses.Dtos;
using System;

namespace EmployeeeApplication.Services.AddressService
{
    public class AddressAppService : AsyncCrudAppService<Address, AddressDto, Guid, PagedAndSortedResultRequestDto, AddressDto>, IAddressAppService
    {
        public AddressAppService(IRepository<Address, Guid> repository) : base(repository)
        {
        }
    }
}
