using Reposetory.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Entity
{      

    public class SearchingPropertyDto
    {
        public int? Id { get; set; }
        public int UserId { get; set; }
        public virtual UserDto? User { get; set; }
        public PropertyStaus? PropertyStatus { get; set; }



        //רשימת מאפיני נכס  
        public bool Parkinglot { get; set; }
        public bool Elivator { get; set; }
        public bool Aircondition { get; set; }
        public bool Basmsent { get; set; }
        public bool SafeRoom { get; set; }
        public bool DisabledAcces { get; set; }
        public bool Bars { get; set; }

        public bool PandorDoor { get; set; }
        public bool PorchGarden { get; set; }
        //

        public PropertyStaus? Status { get; set; }
        public string Address { get; set; }
        public double Xcordinate { get; set; }
        public double Ycordinate { get; set; }
        public double PriceBegin { get; set; }
        public double PriceEnd { get; set; }
        public double PriceForSmBegin { get; set; }
        public double PriceForSmEnd { get; set; }

        public int Rooms { get; set; }
        public double SmBegin { get; set; }
        public double SmEnd { get; set; }
        public List<int> PropertyCondtion { get; set; }
        public List<int> PropertyTypes { get; set; }
        public int FloorBegin { get; set; }
        public int FloorEnd { get; set; }

        public bool IsCommercial { get; set; }

        public Furniture Furniture { get; set; }

    }
}
