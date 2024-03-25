using Microsoft.EntityFrameworkCore;
using Reposetory.Entity;
using Reposetory.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Reposetory.Reposetory
{
    public class CityReposetory : IReposetory<City>
    {

        private readonly Icontext _icontext;
        public CityReposetory(Icontext icontext)
        {
            _icontext = icontext;
        }

        public async Task<City> AddItemAsync(City entity)
        {
            City c = entity;
            await _icontext.Cities.AddAsync(entity);
            await _icontext.save();

            return c;
        }

        public async Task DeleteAsync(int id)
        {

            City c = await _icontext.Cities.FirstOrDefaultAsync(x => x.Id == id);
            _icontext.Cities.Remove(c);
            await _icontext.save();

        }

        public async Task<List<City>> GetAllAsync()
        {
            return await _icontext.Cities.Include(x=>x.Properties).ToListAsync();
        }

        public async Task<City> GetByIdAsync(int id)
        {
            return await _icontext.Cities.Include(x => x.Properties).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task UpdateAsync(City entity, int id)
        {
            
            
                City c = await _icontext.Cities.FirstOrDefaultAsync(x => x.Id == id);
                c.SumPriceForRenting = entity.SumPriceForRenting;
                c.SumPriceForSaling = entity.SumPriceForSaling;
                c.NumOfSailingProperty = entity.NumOfSailingProperty;

                await _icontext.save();
           
            
            

            
        }
    }
}
