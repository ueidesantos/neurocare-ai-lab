using Microsoft.Extensions.DependencyInjection;

namespace NeuroCare.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<Interfaces.IScreeningSessionService, UseCases.ScreeningSessionService>();

        // Application layer registrations will go here
        return services;
    }
}
