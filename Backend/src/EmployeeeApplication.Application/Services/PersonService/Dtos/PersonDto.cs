using Abp.Application.Services.Dto;
using AutoMapper;
using EmployeeeApplication.Domain.Persons;
using System;

namespace EmployeeeApplication.Services.PersonService.Dtos
{
    public class PersonDto:EntityDto<string>
    {
        /// <summary>
        /// 
        /// </summary>
        public string FirstName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string LastName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string EmailAddress { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string MobileNumber { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DateTime? DateOfBirth { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Guid? AddressId { get; set; }
    }
}
