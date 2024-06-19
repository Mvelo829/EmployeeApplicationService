using Abp.Domain.Entities.Auditing;
using EmployeeeApplication.Domain.Enums;
using EmployeeeApplication.Domain.Persons;
using System;

namespace EmployeeeApplication.Domain.Skills
{
    public class Skill:FullAuditedEntity<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
       public virtual string Name { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual int? YearsOfExperience { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual SeniorityRatingEnum? SeniorityRating { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual Person Person { get; set; }
    }
}
