using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using EmployeeeApplication.Domain.Persons;
using EmployeeeApplication.Services.PersonService;
using EmployeeeApplication.Services.PersonService.Dtos;
using EmployeeeApplication.Users;
using EmployeeeApplication.Users.Dto;
using Microsoft.EntityFrameworkCore;
using Shouldly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace EmployeeeApplication.Tests.Persons
{
    public class PersonAppService_test: EmployeeeApplicationTestBase
    {
        private readonly IPersonAppService  _personAppService;
        public  PersonAppService_test() 
        { 
            _personAppService = Resolve<IPersonAppService>();
        }

        [Fact]
        public async Task GetPersons_Test()
        {
            // Act
            var output = await _personAppService.GetAllAsync(new PagedAndSortedResultRequestDto { MaxResultCount = 20, SkipCount = 0 });

            // Assert
            output.Items.Count.ShouldBeGreaterThanOrEqualTo(0);
        }

        [Fact]
        public async Task CreatePerson_Test()
        {
            // Act
            await _personAppService.CreateAsync(
                new CreatePersonDto
                {
                    EmailAddress = "john@volosoft.com",
                    City = "Centurion",
                    DateOfBirth  = DateTime.Now,
                    FirstName = "Test",
                    MobileNumber  = "0738093022",
                    Country = "South Africa",
                    LastName = "Test",
                    StreeAddress = "Centurion Street",
                    PostalCode = "4120"
                });

            await UsingDbContextAsync(async context =>
            {
                var johnNashUser = await context.Persons.FirstOrDefaultAsync(u => u.FirstName == "Test");
                johnNashUser.ShouldNotBeNull();
                var address = await context.Addresses.FirstOrDefaultAsync(x => x.StreeAddress == "Centurion Street");
                address.ShouldNotBeNull();
            });
        }

        [Fact]
        public async Task UpdatePerson_Test()
        {
            await UsingDbContextAsync(async context =>
            {
                var person = await context.Persons.FirstOrDefaultAsync(u => u.FirstName == "Test");
                // Update the person with specific properties
                await _personAppService.UpdateAsync(
                    new CreatePersonDto
                    {
                        Id = person.Id,
                        EmailAddress = "john@volosoft.com",
                        City = "Centurion",
                        DateOfBirth = DateTime.Now,
                        FirstName = "Test98",
                        MobileNumber = "0738093022",
                        Country = "South Africa",
                        LastName = "Test",
                        StreeAddress = "Centurion Street5",
                        PostalCode = "4120"
                    });

                // Retrieve the updated person
                var updatedPerson = await context.Persons.FirstOrDefaultAsync(u => u.FirstName == "Test98");

                // Assert that the updated person is not equivalent to "johnashUser"
                updatedPerson.FirstName.ShouldNotBe("Test");

                // Verify that the address exists
                var address = await context.Addresses.FirstOrDefaultAsync(x => x.StreeAddress == "Centurion Street");
                address.ShouldNotBeNull();
                address.StreeAddress.ShouldNotBeNull();
                address.StreeAddress.ShouldNotBe("Centurion Street");

            });

        }
    }
}
