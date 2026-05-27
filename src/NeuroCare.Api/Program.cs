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

var sessionsGroup = app.MapGroup("/api/sessions");

sessionsGroup.MapPost("/", async (NeuroCare.Application.DTOs.CreateSessionRequest request, NeuroCare.Application.Interfaces.IScreeningSessionService service) =>
{
    var session = await service.CreateSessionAsync(request);
    return Results.Created($"/api/sessions/{session.Id}", session);
})
.WithName("CreateSession");

sessionsGroup.MapGet("/{id:guid}", async (Guid id, NeuroCare.Application.Interfaces.IScreeningSessionService service) =>
{
    var session = await service.GetSessionAsync(id);
    return session != null ? Results.Ok(session) : Results.NotFound();
})
.WithName("GetSession");

sessionsGroup.MapPost("/{id:guid}/consent", async (Guid id, NeuroCare.Application.Interfaces.IScreeningSessionService service) =>
{
    var result = await service.GiveConsentAsync(id);
    return result ? Results.NoContent() : Results.NotFound();
})
.WithName("GiveConsent");

sessionsGroup.MapPost("/{id:guid}/answers", async (Guid id, NeuroCare.Application.DTOs.SubmitAnswerRequest request, NeuroCare.Application.Interfaces.IScreeningSessionService service) =>
{
    var result = await service.SubmitAnswerAsync(id, request);
    return result ? Results.NoContent() : Results.NotFound();
})
.WithName("SubmitAnswer");
// Example of how to use the validation filter
apiGroup.MapPost("/patient-profile", (CreatePatientProfileRequest request) =>
{
    return Results.Created($"/api/patient-profile/{Guid.NewGuid()}", request);
})
.AddEndpointFilter<ValidationFilter<CreatePatientProfileRequest>>()
.WithName("CreatePatientProfile");

app.Run();
