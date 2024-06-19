using Abp.Application.Services;
using EmployeeeApplication.Services.RefListService.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace EmployeeeApplication.Services.RefListService
{
    public class RefListAppService : ApplicationService, IApplicationService
    {

        public async Task<List<RefListDto>> GetAllRefLists()
        {
            Assembly externalAssembly = Assembly.LoadFile($"{Directory.GetCurrentDirectory().Replace("EmployeeeApplication.Web.Host", "EmployeeeApplication.Application")}"
                + $"\\bin\\Debug\\net8.0\\EmployeeeApplication.Core.dll");

            return GetAllEnums(externalAssembly);
        }

        public async Task<RefListDto> GetRefListByName(string Name)
        {
            Assembly externalAssembly = Assembly.LoadFile($"{Directory.GetCurrentDirectory().Replace("EmployeeeApplication.Web.Host", "EmployeeeApplication.Application")}"
                + $"\\bin\\Debug\\net8.0\\EmployeeeApplication.Core.dll");

            return GetAllEnums(externalAssembly).Where(x => x.RefListName.Contains(Name)).FirstOrDefault();
        }
        private static List<RefListDto> GetAllEnums(Assembly assembly)
        {
            var enumData = assembly
              .GetTypes()
              .Where(t => t.IsEnum)
              .ToDictionary(
                  t => t.Name,
                  t => Enum.GetNames(t)
                      .Zip(Enum.GetValues(t).Cast<int>(), (Key, Value) => new { Key, Value })
                      .ToDictionary(kvp => kvp.Key, kvp => kvp.Value)
              );

            var formattedData = enumData.Select(kvp => new RefListDto
            {
                RefListName = kvp.Key,
                RefListItems = kvp.Value.Select(e => new RefListItem { ItemName = e.Key, Value = e.Value }).ToList()
            }).ToList();

            return formattedData;
        }

    }
}
