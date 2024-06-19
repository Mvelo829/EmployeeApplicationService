using Abp.Authorization;
using EmployeeeApplication.Authorization.Roles;
using EmployeeeApplication.Authorization.Users;

namespace EmployeeeApplication.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
