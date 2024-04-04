using Reposetory.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Entity
{
    public class CityDto
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public int? NumOfSailingProperty { get; set; }
        public double? SumPriceForSaling { get; set; }
        public double?   SumPriceForRenting { get; set; }     
        //public ICollection<Property>? Properties{ get; set; }



    }
}
