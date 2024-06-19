using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using EmployeeeApplication.Configuration;

namespace EmployeeeApplication.Web.Host.Startup
{
    [DependsOn(
       typeof(EmployeeeApplicationWebCoreModule))]
    public class EmployeeeApplicationWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public EmployeeeApplicationWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(EmployeeeApplicationWebHostModule).GetAssembly());
        }
    }
}
