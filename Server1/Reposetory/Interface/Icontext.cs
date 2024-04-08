using Reposetory.Entity;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reposetory.Interface
{
    public interface Icontext
    {
        public DbSet<Property> Properties { get; set; }
        public  DbSet<City> Cities { get; set; }
     
        public  DbSet<SearchingPropetry> SearchingPropetries { get; set; }
        public  DbSet<User> Users { get; set; }
        public Task save();

    }
}
