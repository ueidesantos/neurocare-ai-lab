using Microsoft.Extensions.DependencyInjection;
using FluentValidation;
using System.Reflection;

namespace NeuroCare.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<Interfaces.IScreeningSessionService, UseCases.ScreeningSessionService>();

        // Application layer registrations will go here
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

        return services;
    }
}
