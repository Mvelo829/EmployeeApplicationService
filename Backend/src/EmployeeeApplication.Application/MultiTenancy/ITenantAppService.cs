using Abp.Application.Services;
using EmployeeeApplication.MultiTenancy.Dto;

namespace EmployeeeApplication.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

