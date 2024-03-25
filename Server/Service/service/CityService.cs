using AutoMapper;
using Common.Entity;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Reposetory.Entity;
using Reposetory.Interface;
using Service.Intrerface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Service.service
{
    public class CityService:Iservice<CityDto>
    {

        private readonly IMapper mapper;
        private readonly IReposetory<City> reposetory;
        public CityService(IReposetory<City> reposetory, IMapper mapper)
        {
            this.reposetory = reposetory;
            this.mapper = mapper;
        }

        public async Task<CityDto> AddAsync(CityDto entity)
        {
          return mapper.Map<CityDto> (await reposetory.AddItemAsync(mapper.Map<City>(entity)));
        }

        public async Task RemoveAsync(int id)
        {
            await reposetory.DeleteAsync(id);
        }

        public async Task<List<CityDto>> GetAllAsync()
        {
            return mapper.Map<List<CityDto>>(await reposetory.GetAllAsync());

        }

        public async Task<CityDto> GetByIdsAsync(int id)
        {
            return mapper.Map<CityDto>(await reposetory.GetByIdAsync(id));
        }

        public  Task UpdateAsync(int id, CityDto entity)
        {
            return reposetory.UpdateAsync(mapper.Map<City>(entity),id);
        }
    }
}
