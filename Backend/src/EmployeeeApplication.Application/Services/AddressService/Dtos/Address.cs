using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using EmployeeeApplication.Domain.Addresses;
using System;

namespace EmployeeeApplication.Services.Addresses.Dtos
{
    [AutoMap(typeof(Address))]
    public class AddressDto : EntityDto<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
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
