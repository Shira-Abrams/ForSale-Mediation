using Microsoft.EntityFrameworkCore;
using Reposetory.Entity;
using Reposetory.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reposetory.Reposetory
{
    public class SearchingPropertyReposetory : IReposetory<SearchingPropetry>
    {

        private readonly Icontext _icontext;
        public SearchingPropertyReposetory(Icontext icontext)
        {
            _icontext = icontext;
        }

        public async Task<SearchingPropetry> AddItemAsync(SearchingPropetry entity)
        {
            SearchingPropetry sp = entity;
           // sp.User = await _icontext.Users.FirstOrDefaultAsync(u => u.Id == entity.UserCode);
            await _icontext.SearchingPropetries.AddAsync(entity);
            await _icontext.save();
            return sp;
        }

        public async Task DeleteAsync(int id)
        {

            SearchingPropetry sp = await GetByIdAsync(id);
            
            _icontext.SearchingPropetries.Remove(sp);
            await _icontext.save();


        }

        public async Task<List<SearchingPropetry>> GetAllAsync()
        {
            return await _icontext.SearchingPropetries.Include(x => x.User).ToListAsync();
        }

        public async Task<SearchingPropetry> GetByIdAsync(int id)
        {
            return await _icontext.SearchingPropetries.Include(a => a.User).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task UpdateAsync(SearchingPropetry entity, int id)
        {
            var sp = await _icontext.SearchingPropetries.FirstOrDefaultAsync(x => x.Id == id);
            sp.Furniture = entity.Furniture;
            sp.Status = entity.Status;
            sp.PriceEnd = entity.PriceEnd;
            sp.PriceBegin = entity.PriceBegin;

            sp.PriceEnd = entity.PriceEnd;
            sp.PriceBegin = entity.PriceBegin;


            sp.PriceForSmEnd = entity.PriceForSmEnd;
            sp.PriceForSmBegin = entity.PriceForSmBegin;

            sp.FloorEnd  = entity.FloorEnd;
            sp.FloorBegin = entity.FloorBegin;

            sp.PropertyCondtion = entity.PropertyCondtion;
            sp.PropertyStatus = entity.PropertyStatus;
            sp.Address = entity.Address;
            sp.Rooms = entity.Rooms;
            sp.PropertyTypes = entity.PropertyTypes;  
            sp.SmEnd = entity.SmEnd;
            sp.SmBegin = entity.SmBegin;


            await _icontext.save();
        }
    }
}
