using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Reposetory.Interface
{
    public interface IReposetory<T> where T : class
    { 
        public Task<List<T>> GetAllAsync();
        public Task<T> GetByIdAsync(int id);
        public Task DeleteAsync (int id);
        public Task  UpdateAsync (T entity,int id);
        public Task<T> AddItemAsync (T entity);

    }
}
