using System.ComponentModel.DataAnnotations;

namespace EmployeeeApplication.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}