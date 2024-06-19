using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace EmployeeeApplication.Controllers
{
    public abstract class EmployeeeApplicationControllerBase: AbpController
    {
        protected EmployeeeApplicationControllerBase()
        {
            LocalizationSourceName = EmployeeeApplicationConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
