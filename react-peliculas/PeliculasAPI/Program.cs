using Microsoft.OpenApi.Models;
using PeliculasAPI;
using PeliculasAPI.Entidades;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//esto es para cache
builder.Services.AddOutputCache(opciones =>
{
    opciones.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(60);
});
//aqui termina lo de cache


builder.Services.AddSingleton<IRepositorio,RepositorioEnMemoria>();//esto es para inyectar dependencias



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//para el cache
app.UseOutputCache();


app.UseAuthorization();

app.MapControllers();

app.Run();
