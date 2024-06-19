using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeeApplication.Services.RefListService.Dto
{
    public class RefListDto
    {
        /// <summary>
        /// 
        /// </summary>
        public string RefListName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public List<RefListItem> RefListItems { get; set; }
    }
    public class RefListItem
    {
        /// <summary>
        /// 
        /// </summary>
        public string ItemName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? Value { get; set; }
    }
}
