using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using EmployeeeApplication.Authorization.Roles;
using EmployeeeApplication.Authorization.Users;
using EmployeeeApplication.MultiTenancy;
using EmployeeeApplication.Domain.Persons;
using EmployeeeApplication.Domain.Skills;
using EmployeeeApplication.Domain.Addresses;

namespace EmployeeeApplication.EntityFrameworkCore
{
    public class EmployeeeApplicationDbContext : AbpZeroDbContext<Tenant, Role, User, EmployeeeApplicationDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Person> Persons { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DbSet<Skill> Skills { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DbSet<Address> Addresses { get; set; }
        public EmployeeeApplicationDbContext(DbContextOptions<EmployeeeApplicationDbContext> options)
            : base(options)
        {
        }
    }
}
