using System.Threading.Tasks;
using EmployeeeApplication.Models.TokenAuth;
using EmployeeeApplication.Web.Controllers;
using Shouldly;
using Xunit;

namespace EmployeeeApplication.Web.Tests.Controllers
{
    public class HomeController_Tests: EmployeeeApplicationWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}