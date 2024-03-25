using Microsoft.EntityFrameworkCore;
using Reposetory.Entity;
using Reposetory.Interface;
using System.Collections.Generic;

namespace DataContext
{
    public class Db:DbContext,Icontext
    {
       

        public DbSet<Property> Properties { get; set; }
        public DbSet<City> Cities { get; set; }
       
        public DbSet<SearchingPropetry> SearchingPropetries { get; set; }
        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Property>()
                .Property(e => e.ImageUrlList)
                .HasConversion(
                    v => string.Join(",", v),
                    v => v.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToList()
                );

            modelBuilder.Entity<SearchingPropetry>()
             .Property(e => e.PropertyTypes)
             .HasConversion(
                 v => string.Join(',', v),
                 v => v.Split(',', StringSplitOptions.RemoveEmptyEntries)
                     .Select(int.Parse)
                     .ToList()
             );
            modelBuilder.Entity<SearchingPropetry>()
            .Property(e => e.PropertyCondtion)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToList()
            );

            base.OnModelCreating(modelBuilder);
        }
        public async Task save()
        {
            await SaveChangesAsync();
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=DESKTOP-E53SV6K\\SQLEXPRESS01;database=RealEastate;trusted_connection=true;");
        }


    }
}