using Abp.Domain.Entities.Auditing;
using System;

namespace EmployeeeApplication.Domain.Addresses
{
    public class Address:FullAuditedEntity<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public virtual string StreeAddress { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string City { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string PostalCode { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string Country { get; set; }
    }
}
