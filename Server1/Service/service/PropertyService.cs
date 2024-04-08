using AutoMapper;
using Common.Entity;
using Microsoft.EntityFrameworkCore.Query;
using Reposetory.Entity;
using Reposetory.Interface;
using Service.Intrerface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Service.service
{
    public class PropertyService : Iservice<PropertyDto>
    {

        private readonly IMapper mapper;
        private readonly IReposetory<Property> reposetory;
        public PropertyService(IReposetory<Property> reposetory, IMapper mapper)
        {
            this.reposetory = reposetory;
            this.mapper = mapper;
        }

        public async Task<PropertyDto> AddAsync(PropertyDto entity)
        {
            return mapper.Map<PropertyDto>(await reposetory.AddItemAsync(mapper.Map<Property>(entity)));
        }

        public async Task<List<PropertyDto>> GetAllAsync()
        {
            return mapper.Map<List<PropertyDto>>(await reposetory.GetAllAsync());
        }

        public async Task<PropertyDto> GetByIdsAsync(int id)
        {
            return mapper.Map<PropertyDto>(await reposetory.GetByIdAsync(id));
        }

        public async Task RemoveAsync(int id)
        {
            await reposetory.DeleteAsync(id);
            ;
        }

        public async Task UpdateAsync(int id, PropertyDto entity)
        {
            await reposetory.UpdateAsync(mapper.Map<Property>(entity),id);
        }
    }
}