using AutoMapper;
using EmployeeeApplication.Domain.Persons;
using EmployeeeApplication.Domain.Skills;
using EmployeeeApplication.Services.PersonService.Dtos;
using EmployeeeApplication.Services.SkillService.Dtos;
using System;

namespace EmployeeeApplication.Services.SkillService
{
    public class MapProfile:Profile
    {
        public MapProfile()
        {
            CreateMap<Skill, SkillDto>()
                  .ForMember(x => x.PersonId, m => m.MapFrom(x => x.Person != null ? x.Person.Id : null));

            CreateMap<SkillDto, Skill>()
                .ForMember(x => x.Id, m => m.Ignore())
                .ForMember(x => x.Person, m => m.Ignore());
        }
    }
}
