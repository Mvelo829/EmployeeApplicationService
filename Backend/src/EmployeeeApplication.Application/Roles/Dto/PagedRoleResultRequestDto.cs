using Abp.Application.Services.Dto;

namespace EmployeeeApplication.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

