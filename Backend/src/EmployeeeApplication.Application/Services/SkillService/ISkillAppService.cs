using Abp.Application.Services;
using Abp.Application.Services.Dto;
using EmployeeeApplication.Services.SkillService.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployeeeApplication.Services.SkillService
{
    public interface ISkillAppService : IAsyncCrudAppService<SkillDto, Guid, PagedAndSortedResultRequestDto, SkillDto, SkillDto>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="personId"></param>
        /// <returns></returns>
        Task<PagedResultDto<SkillDto>> GetAllSkillByPersonId(SkillSetDto input);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="skillsInput"></param>
        /// <returns></returns>
        Task<List<SkillDto>> UpdateSkills(List<SkillDto> skillsInput);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="skillsInput"></param>
        /// <returns></returns>
        Task<List<SkillDto>> CreateSkills(List<SkillDto> skillsInput);
    }
}
