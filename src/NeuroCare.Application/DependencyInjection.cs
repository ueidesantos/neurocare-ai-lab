using Microsoft.Extensions.DependencyInjection;

namespace NeuroCare.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        // Application layer registrations will go here
        return services;
    }
}
