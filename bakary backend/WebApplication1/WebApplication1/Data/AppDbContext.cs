using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class AppDbContext : DbContext 

    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) 
        {
        
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "حلويات" },
                new Category { Id = 2, Name = "مخبوزات" }
            );
        }

        public DbSet <Product> products { get; set; }
        public DbSet<Category> Categories { get; set; }

    }
}
