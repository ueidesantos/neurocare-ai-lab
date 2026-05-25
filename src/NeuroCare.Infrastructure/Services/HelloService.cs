using NeuroCare.Application.Interfaces;

namespace NeuroCare.Infrastructure.Services;

public class HelloService : IHelloService
{
    public string GetHello()
    {
        return "Hello from NeuroCare!";
    }
}
