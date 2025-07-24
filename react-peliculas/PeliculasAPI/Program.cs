using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using PeliculasAPI;
using PeliculasAPI.Entidades;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//automapper
//builder.Services.AddAutoMapper(typeof(Program));

//conexion db dese appsettingsDevelopment.json
builder.Services.AddDbContext<ApplicationDbContext>(opciones => opciones.UseSqlServer("name=DefaultConnection"));

//esto es para cache
builder.Services.AddOutputCache(opciones =>
{
    opciones.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(60);

});
//aqui termina lo de cache

//variable para la url de solicitud
var originesPermitidos = builder.Configuration.GetValue<string>("originesPermitidos")!.Split(",");


//configuracion para las solicitudes
// y no de error en cross
builder.Services.AddCors(opciones =>
{
    opciones.AddDefaultPolicy(opcionesCORS =>
    {

        opcionesCORS.WithOrigins(originesPermitidos).AllowAnyMethod().AllowAnyHeader();

    });
});






var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();

app.UseCors();


//para el cache
app.UseOutputCache();


app.UseAuthorization();

app.MapControllers();

app.Run();
