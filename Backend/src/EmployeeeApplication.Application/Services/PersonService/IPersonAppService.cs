using Abp.Application.Services;
using Abp.Application.Services.Dto;
using EmployeeeApplication.Services.PersonService.Dtos;

namespace EmployeeeApplication.Services.PersonService
{
    public interface IPersonAppService: IAsyncCrudAppService<CreatePersonDto, string, PagedAndSortedResultRequestDto, CreatePersonDto, CreatePersonDto>
    {
    }
}
