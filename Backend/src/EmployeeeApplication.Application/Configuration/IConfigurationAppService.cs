using System.Threading.Tasks;
using EmployeeeApplication.Configuration.Dto;

namespace EmployeeeApplication.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
