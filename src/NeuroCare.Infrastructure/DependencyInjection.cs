using Microsoft.Extensions.DependencyInjection;
using NeuroCare.Application.Interfaces;
using NeuroCare.Infrastructure.Services;

namespace NeuroCare.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IHelloService, HelloService>();
        services.AddSingleton<Domain.Interfaces.IScreeningSessionRepository, Persistence.InMemoryScreeningSessionRepository>();
        services.AddSingleton<Domain.Interfaces.IQuestionnaireAnswerRepository, Persistence.InMemoryQuestionnaireAnswerRepository>();

        // Other Infrastructure layer registrations will go here
        return services;
    }
}
