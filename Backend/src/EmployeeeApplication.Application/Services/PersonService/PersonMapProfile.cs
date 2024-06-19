using AutoMapper;
using EmployeeeApplication.Domain.Addresses;
using EmployeeeApplication.Domain.Persons;
using EmployeeeApplication.Services.PersonService.Dtos;
using System;

namespace EmployeeeApplication.Services.PersonService
{
    public class PersonMapProfile:Profile
    {
        public PersonMapProfile()
        {
            CreateMap<Person, PersonDto>()
                .ForMember(x => x.AddressId, m => m.MapFrom(x => x.Address != null ? x.Address.Id : (Guid?)null));

            CreateMap<Person, CreatePersonDto>()
                .ForMember(x => x.AddressId, m => m.MapFrom(x => x.Address != null ? x.Address.Id : (Guid?)null))
                .ForMember(x => x.City, m => m.MapFrom(x => x.Address != null ? x.Address.City : null))
                .ForMember(x => x.Country, m => m.MapFrom(x => x.Address != null ? x.Address.Country : null))
                .ForMember(x => x.PostalCode, m => m.MapFrom(x => x.Address != null ? x.Address.PostalCode : null))
                .ForMember(x => x.StreeAddress, m => m.MapFrom(x => x.Address != null ? x.Address.StreeAddress : null));



            CreateMap<CreatePersonDto, Address>()
             .ForMember(x => x.City, m => m.MapFrom(x => x.City))
             .ForMember(x => x.Country, m => m.MapFrom(x => x.Country))
             .ForMember(x => x.PostalCode, m => m.MapFrom(x => x.PostalCode))
             .ForMember(x => x.StreeAddress, m => m.MapFrom(x => x.StreeAddress))
             .ForMember(x => x.Id, m => m.Ignore());


            CreateMap<CreatePersonDto, Person>()
                .ForMember(x => x.Id, m => m.Ignore())
                .ForMember(x => x.FirstName, m => m.MapFrom(x => x.FirstName))
                .ForMember(x => x.LastName, m => m.MapFrom(x => x.LastName))
                .ForMember(x => x.MobileNumber, m => m.MapFrom(x => x.MobileNumber))
                .ForMember(x => x.Address, m => m.Ignore());

            CreateMap<PersonDto, Person>()
                .ForMember(x => x.Id, m => m.Ignore())
                .ForMember(x => x.Address, m => m.Ignore());


        }
    }
}
