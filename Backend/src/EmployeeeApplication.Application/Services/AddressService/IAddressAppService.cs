using Abp.Application.Services;
using Abp.Application.Services.Dto;
using EmployeeeApplication.Services.Addresses.Dtos;
using System;

namespace EmployeeeApplication.Services.AddressService
{
    public interface IAddressAppService : IAsyncCrudAppService<AddressDto, Guid, PagedAndSortedResultRequestDto, AddressDto, AddressDto>
    {
    }
}
