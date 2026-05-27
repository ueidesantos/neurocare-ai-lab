using Microsoft.Extensions.DependencyInjection;
using NeuroCare.Application.Interfaces;
using NeuroCare.Infrastructure.Services;

namespace NeuroCare.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IHelloService, HelloService>();

        // Other Infrastructure layer registrations will go here
        return services;
    }
}
