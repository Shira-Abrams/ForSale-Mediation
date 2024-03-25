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
    public class UserService : Iservice<UserDto>
    {  
         private readonly IMapper mapper;
        private readonly IReposetory<User> reposetory;
        public UserService(IReposetory<User> reposetory,   IMapper mapper)
        {
            this.reposetory = reposetory;
            this.mapper = mapper;   
        }

        public async Task<UserDto> AddAsync(UserDto entity)
        {              
            return mapper.Map<UserDto>(await reposetory.AddItemAsync(mapper.Map<User>(entity)));
        }

        public async Task<List<UserDto>> GetAllAsync()
        {
           return mapper.Map<List<UserDto>>(await reposetory.GetAllAsync());
        }

        public async Task<UserDto> GetByIdsAsync(int id)
        {
            return mapper.Map<UserDto>(await reposetory.GetByIdAsync(id));
        }

        public async Task RemoveAsync(int id)
        {
           await reposetory.DeleteAsync(id);
        }

        public async Task UpdateAsync(int id, UserDto entity)
        {
           await reposetory.UpdateAsync(mapper.Map<User>(entity),id);
        }
    }
}
