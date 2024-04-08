using Common.Entity;
using Microsoft.Extensions.DependencyInjection;
using Reposetory;
using Service.Intrerface;
using Service.service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public static class ServiceExtentions
    {  

        public static IServiceCollection AddServiceExtensions(this IServiceCollection services)
        {

            services.AddReposetories();
            services.AddScoped<Iservice<CityDto>,CityService >();
            services.AddScoped<Iservice<PropertyDto>, PropertyService>();
 
            services.AddScoped<Iservice<SearchingPropertyDto>, SearchingPropertyService>();
            services.AddScoped<Iservice<UserDto>, UserService>();
           services.AddAutoMapper(typeof(MapperProflie));
            return services;

            
        }
    }
}
