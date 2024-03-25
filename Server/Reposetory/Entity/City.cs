using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reposetory.Entity
{
    public class City
    {
         public int Id { get; set; }
        public string Name { get; set; }
        public int NumOfSailingProperty { get; set; }
        public double SumPriceForSaling { get; set; }
        public double SumPriceForRenting { get; set; }
        public virtual ICollection<Property>? Properties { get; set; }       
        

    }
}
