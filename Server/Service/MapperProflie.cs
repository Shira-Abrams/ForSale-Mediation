using AutoMapper;
using Common.Entity;
using Reposetory.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    internal class MapperProflie:Profile
    {
        public MapperProflie()
        {
            CreateMap<CityDto, City>().ReverseMap();

            CreateMap<PropertyDto, Property>().ReverseMap(); 
            CreateMap<UserDto, User>().ReverseMap(); 
            CreateMap<SearchingPropertyDto, SearchingPropetry>().ReverseMap();
            
        }
    }
}
