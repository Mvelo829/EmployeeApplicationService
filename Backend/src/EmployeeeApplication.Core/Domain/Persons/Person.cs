using Abp.Domain.Entities.Auditing;
using System.Linq;
using System;
using EmployeeeApplication.Domain.Addresses;

namespace EmployeeeApplication.Domain.Persons
{
    public class Person : FullAuditedEntity<string>
    {
        public Person()
        {
            Id = GenerateCustomId();
        }
        /// <summary>
        /// 
        /// </summary>
        public virtual string FirstName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string LastName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string EmailAddress { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string MobileNumber { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual DateTime? DateOfBirth { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual Address Address { get; set; }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        private static string GenerateCustomId()
        {
            var random = new Random();
            var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var idLetters = new string(Enumerable.Repeat(letters, 2)
                .Select(s => s[random.Next(s.Length)]).ToArray());
            var idNumbers = random.Next(1000, 10000).ToString();

            return idLetters + idNumbers;
        }
    }

}
