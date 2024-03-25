using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Intrerface
{
    public interface Iservice<T>
    {    public Task<List<T>> GetAllAsync();
        public Task<T> GetByIdsAsync(int id);
        public Task UpdateAsync(int id, T entity);
        public Task RemoveAsync(int id);
        public Task<T> AddAsync(T entity);

    }
}
