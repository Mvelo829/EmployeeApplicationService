using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using EmployeeeApplication.Domain.Persons;
using EmployeeeApplication.Domain.Skills;
using EmployeeeApplication.Services.SkillService.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeeApplication.Services.SkillService
{
    public class SkillAppService : AsyncCrudAppService<Skill, SkillDto, Guid, PagedAndSortedResultRequestDto, SkillDto>, ISkillAppService
    {
        private readonly IRepository<Person, string> _personRepository;
        private readonly IRepository<Skill, Guid> _repository;
        public SkillAppService(IRepository<Skill, Guid> repository, IRepository<Person, string> personRepository) : base(repository)
        {
            _personRepository = personRepository;
            _repository = repository;
        }


        public override async Task<SkillDto> CreateAsync(SkillDto input)
        {
            var skill = ObjectMapper.Map<Skill>(input);
            skill.Person = await _personRepository.GetAsync(input.PersonId);
            skill = await _repository.InsertAsync(skill);
            return ObjectMapper.Map<SkillDto>(skill);
        }
        [HttpPost]
        public async Task<List<SkillDto>> CreateSkills(List<SkillDto> skillsInput)
        {
            var response = new List<Skill>();
            foreach (var item in skillsInput)
            {
                var person = await _personRepository.GetAllIncluding(x => x.Address).FirstOrDefaultAsync(x => x.Id == item.PersonId);
                var skill = ObjectMapper.Map<Skill>(item);
                skill.Person = person;
                skill = await _repository.InsertAsync(skill);
                response.Add(skill);
            }

            return ObjectMapper.Map<List<SkillDto>>(response);
        }

        public override async Task<SkillDto> UpdateAsync(SkillDto input)
        {
            var skill = await _repository.GetAllIncluding(x => x.Person).FirstOrDefaultAsync(x => x.Id == input.Id);
            skill.Person = await _personRepository.GetAsync(input.PersonId);
            ObjectMapper.Map(input, skill);
            skill = await _repository.UpdateAsync(skill);
            return ObjectMapper.Map<SkillDto>(skill);
        }

        [HttpPut]
        public async Task<List<SkillDto>> UpdateSkills(List<SkillDto> skillsInput)
        {
            var response = new List<Skill>();
            foreach (var item in skillsInput)
            {
                var person = await _personRepository.GetAllIncluding(x => x.Address).FirstOrDefaultAsync(x => x.Id == item.PersonId);
                var skill = await _repository.GetAllIncluding(x=>x.Person).Where(x=>x.Id == item.Id).FirstOrDefaultAsync();
                if(skill == null)
                {
                    skill = ObjectMapper.Map<Skill>(item);
                    skill.Person = person;
                    skill = await _repository.InsertAsync(skill);
                    response.Add(skill);
                }
                else
                {
                    ObjectMapper.Map(item, skill);
                    skill.Person = person;
                    skill = await _repository.UpdateAsync(skill);
                    response.Add(skill);
                }
            }

            return ObjectMapper.Map<List<SkillDto>>(response);
        }


        public override async Task<SkillDto> GetAsync(EntityDto<Guid> input)
        {
            var person = await _repository.GetAllIncluding(x => x.Person).FirstOrDefaultAsync(x => x.Id == input.Id);
            return ObjectMapper.Map<SkillDto>(person);
        }

        public override async Task<PagedResultDto<SkillDto>> GetAllAsync(PagedAndSortedResultRequestDto input)
        {
            var query = await _repository.GetAllIncludingAsync(x => x.Person);
            query = ApplySorting(query, input);
            var pagedResult = query.PageBy(input.SkipCount, input.MaxResultCount);
            var skills = ObjectMapper.Map<List<SkillDto>>(pagedResult);
            return await Task.FromResult(new PagedResultDto<SkillDto>(
                                   totalCount: pagedResult.Count(),
                                   items: skills
                               ));
        }


        public async Task<PagedResultDto<SkillDto>> GetAllSkillByPersonId(SkillSetDto input)
        {
            var query =  _repository.GetAllIncluding(x => x.Person).Where(x=>x.Person.Id == input.PersonId);
            query = ApplySorting(query, input);
            var pagedResult = query.PageBy(input.SkipCount, input.MaxResultCount);
            var skills = ObjectMapper.Map<List<SkillDto>>(pagedResult);
            return await Task.FromResult(new PagedResultDto<SkillDto>(
                                   totalCount: pagedResult.Count(),
                                   items: skills
                               ));
        }

    }
}
