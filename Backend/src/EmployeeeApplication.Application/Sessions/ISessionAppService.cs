using System.Threading.Tasks;
using Abp.Application.Services;
using EmployeeeApplication.Sessions.Dto;

namespace EmployeeeApplication.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
