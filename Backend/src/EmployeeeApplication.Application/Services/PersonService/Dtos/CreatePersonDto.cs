using AutoMapper;
using EmployeeeApplication.Domain.Persons;

namespace EmployeeeApplication.Services.PersonService.Dtos
{
    public class CreatePersonDto:PersonDto
    {
        public string StreeAddress { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string City { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string PostalCode { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Country { get; set; }
    }
}
