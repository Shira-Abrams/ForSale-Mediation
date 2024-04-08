using AutoMapper;
using Common.Entity;
using Reposetory.Entity;
using Reposetory.Interface;
using Service.Intrerface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.service
{
    public class SearchingPropertyService:Iservice<SearchingPropertyDto >
    {

        private readonly IMapper mapper;
        private readonly IReposetory<SearchingPropetry> reposetory;
        public SearchingPropertyService(IReposetory<SearchingPropetry> reposetory, IMapper mapper)
        {
            this.reposetory = reposetory;
            this.mapper = mapper;
        }

        public async Task<SearchingPropertyDto> AddAsync(SearchingPropertyDto entity)
        {
            return  mapper.Map<SearchingPropertyDto>(await reposetory.AddItemAsync(mapper.Map<SearchingPropetry>(entity)));
        }

        public async Task<List<SearchingPropertyDto>> GetAllAsync()
        {
            return mapper.Map<List<SearchingPropertyDto>>(await reposetory.GetAllAsync());
        }

        public async Task<SearchingPropertyDto> GetByIdsAsync(int id)
        {
            return mapper.Map<SearchingPropertyDto>(await reposetory.GetByIdAsync(id));
        }

        public async Task RemoveAsync(int id)
        {
            await reposetory.DeleteAsync(id);
        }

        public async Task UpdateAsync(int id, SearchingPropertyDto entity)
        {
            await reposetory.UpdateAsync(mapper.Map<SearchingPropetry>(entity),id);
        }
    }
}
