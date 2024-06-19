using EmployeeeApplication.Debugging;

namespace EmployeeeApplication
{
    public class EmployeeeApplicationConsts
    {
        public const string LocalizationSourceName = "EmployeeeApplication";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "bd548a5142274f9ca562c1cce5e49591";
    }
}
