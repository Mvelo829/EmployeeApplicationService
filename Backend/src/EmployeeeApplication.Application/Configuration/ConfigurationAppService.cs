using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using EmployeeeApplication.Configuration.Dto;

namespace EmployeeeApplication.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : EmployeeeApplicationAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
