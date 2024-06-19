using Abp.Application.Services.Dto;

namespace EmployeeeApplication.Services.SkillService.Dtos
{
    public class SkillSetDto: PagedAndSortedResultRequestDto
    {
        public string PersonId { get; set; }
    }
}
