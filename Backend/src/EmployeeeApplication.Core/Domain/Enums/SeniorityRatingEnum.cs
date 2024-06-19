using System.ComponentModel;

namespace EmployeeeApplication.Domain.Enums
{
    public enum SeniorityRatingEnum:int
    {
        [Description("Beginner")]
        Beginner = 1,
        [Description("InterMediate")]
        InterMediate = 2,
        [Description("Advanced")]
        Advanced = 3,
        [Description("Expert")]
        Expert = 4,
    }
}
