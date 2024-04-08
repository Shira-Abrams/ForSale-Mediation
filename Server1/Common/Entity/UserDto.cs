using Reposetory.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Entity
{
    public class UserDto
    {

        public int? Id { get; set; }
        public string?   Name { get; set; }
        public string?  PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        //public List<int>? PropertyListIId { get; set; }
        //public List<int>? ListOfSearchingId { get; set; }

        //public ICollection<PropertyDto>? PropertyList { get; set; }
        //public ICollection<SearchingPropertyDto>? ListOfSearching { get; set; }
    }
}
