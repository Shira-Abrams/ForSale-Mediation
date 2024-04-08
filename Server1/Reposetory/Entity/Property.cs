using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reposetory.Entity
{       
   
     public enum PropertyTypes { דירה,ביתפרטי,דירתגן,קוטג,דומשפחתי , פנאהוז,דירתגג,שטחחקלאי , דופלקס, מגרש,בינין}
     public enum EntrcyDate {מידי,עתידי,גמיש}
     public enum PropertyStaus { sale,rent}
     public enum Furniture { none,hulf,full}
     public enum PropertyCondition {חדשמקבלן ,חדש,משופץ,שמור,ישן}
         
    public class Property
    {
          
        
        public int  Id { get; set; }
        public int CityId { get; set; }
        [ForeignKey("CityId")]
        public City City { get; set; }

        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
        public PropertyStaus PropertyStatus { get; set; }
        public string OfferingStatus { get; set; }
        public string Adress { get; set; }
        public double? Xcordinate { get; set; }
        public double? Ycordinate { get; set; }

        public double Sm { get; set; }
       


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
        
         public PropertyTypes PropertyType { get; set; }
        public double PropertyPrice { get; set; }
        public PropertyCondition PropertyCondition { get; set;}
        public double PriceForSm { get; set; }
        public int Floor { get; set; }
        public int AllFloor { get; set; }
        public int NumRoom { get; set; }
        public int NumBlock { get; set; }
        public int NumEvenue { get; set; }
        public EntrcyDate EntrcyDate { get; set; }
        public int BuildingYear { get; set; }
        public string PropertyDesctiption { get; set; }
        public Furniture Furniture { get; set; }
        public bool IsCommercial { get; set; }
        public List<string>? ImageUrlList { get; set; }


    }
}
