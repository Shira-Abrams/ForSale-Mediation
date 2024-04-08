using Microsoft.Extensions.DependencyInjection;
using Reposetory.Entity;
using Reposetory.Interface;
using Reposetory.Reposetory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reposetory
{
    public static class ExtentionIserviceCollection
    {  

        public static IServiceCollection AddReposetories(this IServiceCollection services)
        {

            services.AddScoped<IReposetory<City>, CityReposetory>();
            services.AddScoped<IReposetory<Property>, PropertyReposetory>();
         
         
            services.AddScoped<IReposetory<User>, UserReposetory>();
            services.AddScoped<IReposetory<SearchingPropetry>, SearchingPropertyReposetory>();
         
            return services;
        }
    }
}
