using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reposetory.Entity
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string password { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public ICollection<Property> PropertyList { get; set; }
        public ICollection<SearchingPropetry> ListOfSearching { get; set; }
            
      
    }
}
