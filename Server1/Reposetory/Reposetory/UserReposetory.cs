using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
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
    public class UserReposetory:IReposetory<User>
    {

        private readonly Icontext _icontext;
        public UserReposetory(Icontext icontext)
        {
            _icontext = icontext; 
        }

        public async Task<User> AddItemAsync(User entity)
        {       
              User u=entity; 
              await _icontext.Users.AddAsync(entity);
              await _icontext.save();
               return u;
              
        }

        public async Task  DeleteAsync(int id)
        {  

            var u=await GetByIdAsync  (id);  
            _icontext.Users.Remove(u);
            await _icontext.save();   
         }   
                 
            
       

        public async Task<List<User>> GetAllAsync()
        {
            return await _icontext.Users.ToListAsync();
        }

        public async Task<User> GetByIdAsync(int id)
        {
          return await   _icontext.Users.FirstOrDefaultAsync(x=>x.Id==id);

                

        }

        public async Task UpdateAsync(User entity, int id)
        {
            var u = await _icontext.Users.FirstOrDefaultAsync(x => x.Id == id);
             u.password = entity.password;
            await _icontext.save();
           
        }
    }
}
