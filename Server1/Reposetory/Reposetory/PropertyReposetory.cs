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
    public class PropertyReposetory : IReposetory<Property>
    {
        private readonly Icontext _icontext;
        public PropertyReposetory(Icontext icontext)
        {
            _icontext = icontext;
        }

        public async Task<Property> AddItemAsync(Property entity)
        {

            Property p = entity;
            await _icontext.Properties.AddAsync(entity);
            await _icontext.save();
            return p;       
        }

        public async Task DeleteAsync(int id)
        {  

            var p = await GetByIdAsync(id); 
             _icontext.Properties.Remove(p);   
            await _icontext.save();
            
        }

        public async Task<List<Property>> GetAllAsync()
        {
            return await _icontext.Properties.Include(a=>a.User).Include(x=>x.City).ToListAsync();
        }

        public async Task<Property> GetByIdAsync(int id)
        {
           return await  _icontext.Properties.Include(x=>x.User).Include(x=>x.City).FirstOrDefaultAsync(x => x.Id == id);        
        }

        public async Task UpdateAsync(Property entity, int id)
        {
            
            Property p= await _icontext.Properties.FirstOrDefaultAsync(x => x.Id == id); 
            p.Furniture=entity.Furniture;
            p.OfferingStatus=entity.OfferingStatus; 
            p.EntrcyDate=entity.EntrcyDate; 
            p.PriceForSm=entity.PriceForSm;    
            p.PropertyCondition=entity.PropertyCondition;
            p.PropertyDesctiption=entity.PropertyDesctiption;   
            p.PropertyStatus=entity.PropertyStatus; 
            p.PropertyPrice=entity.PropertyPrice;
            p.Elivator=entity.Elivator; 
            p.Bars=entity.Bars; 
            p.Furniture= entity.Furniture;
            p.Aircondition=entity.Aircondition;  
            p.Bars=entity.Bars;
            p.Basmsent=entity.Basmsent; 
            p.DisabledAcces= entity.DisabledAcces;   
            p.Parkinglot=entity.Parkinglot; 
            p.SafeRoom=entity.SafeRoom; 
            
            
            await _icontext.save();
           
        }
    }
}
