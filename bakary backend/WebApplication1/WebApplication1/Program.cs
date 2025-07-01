using WebApplication1.Data;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// ✨ Add services before building the app
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
});

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=bakery.db"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ✅ CORS setup BEFORE build
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins("http://localhost:3000") // رابط الواجهة الأمامية (React)
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build(); // ⬅️ لازم بعد كل الـ Services

// ✅ Middleware pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(); // ✅ قبل UseAuthorization

app.UseAuthorization();

app.MapControllers();

app.Run();
