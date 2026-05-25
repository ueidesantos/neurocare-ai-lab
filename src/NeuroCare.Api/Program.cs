var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Register services from layers
builder.Services.AddScoped<NeuroCare.Application.Interfaces.IHelloService, NeuroCare.Infrastructure.Services.HelloService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/hello", (NeuroCare.Application.Interfaces.IHelloService helloService) =>
{
    return Results.Ok(helloService.GetHello());
})
.WithName("GetHello");

app.Run();
