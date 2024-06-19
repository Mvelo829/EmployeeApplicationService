using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using EmployeeeApplication.Domain.Enums;
using EmployeeeApplication.Domain.Persons;
using EmployeeeApplication.Domain.Skills;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeeApplication.Services.SkillService.Dtos
{
    [AutoMap(typeof(Skill))]
    public class SkillDto:EntityDto<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? YearsOfExperience { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public SeniorityRatingEnum? SeniorityRating { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string PersonId { get; set; }
    }
}
