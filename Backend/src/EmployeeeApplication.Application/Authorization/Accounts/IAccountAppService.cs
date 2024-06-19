using System.Threading.Tasks;
using Abp.Application.Services;
using EmployeeeApplication.Authorization.Accounts.Dto;

namespace EmployeeeApplication.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
