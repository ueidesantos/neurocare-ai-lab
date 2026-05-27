using Microsoft.Extensions.DependencyInjection;
using NeuroCare.Application.Interfaces;
using NeuroCare.Infrastructure.Services;

namespace NeuroCare.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddScoped<IHelloService, HelloService>();

        return services;
    }
}
