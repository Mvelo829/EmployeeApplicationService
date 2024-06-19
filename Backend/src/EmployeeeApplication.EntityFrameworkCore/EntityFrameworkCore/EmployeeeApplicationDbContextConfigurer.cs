using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace EmployeeeApplication.EntityFrameworkCore
{
    public static class EmployeeeApplicationDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<EmployeeeApplicationDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<EmployeeeApplicationDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
