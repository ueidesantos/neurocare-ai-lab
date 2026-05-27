using Microsoft.Extensions.DependencyInjection;

namespace NeuroCare.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        // Add Application layer services here

        return services;
    }
}
