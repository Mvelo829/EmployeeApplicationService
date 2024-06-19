using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using EmployeeeApplication.EntityFrameworkCore;
using EmployeeeApplication.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace EmployeeeApplication.Web.Tests
{
    [DependsOn(
        typeof(EmployeeeApplicationWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class EmployeeeApplicationWebTestModule : AbpModule
    {
        public EmployeeeApplicationWebTestModule(EmployeeeApplicationEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(EmployeeeApplicationWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(EmployeeeApplicationWebMvcModule).Assembly);
        }
    }
}