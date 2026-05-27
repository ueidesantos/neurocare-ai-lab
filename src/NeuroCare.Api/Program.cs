using NeuroCare.Application;
using NeuroCare.Infrastructure;
using NeuroCare.Api.Filters;
using NeuroCare.Application.DTOs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Register services from layers
builder.Services.AddApplication();
builder.Services.AddInfrastructure();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var apiGroup = app.MapGroup("/api");

apiGroup.MapGet("/hello", (NeuroCare.Application.Interfaces.IHelloService helloService) =>
{
    return Results.Ok(helloService.GetHello());
})
.WithName("GetHello");

// Example of how to use the validation filter
apiGroup.MapPost("/patient-profile", (CreatePatientProfileRequest request) =>
{
    return Results.Created($"/api/patient-profile/{Guid.NewGuid()}", request);
})
.AddEndpointFilter<ValidationFilter<CreatePatientProfileRequest>>()
.WithName("CreatePatientProfile");

app.Run();
