using NeuroCare.Infrastructure.Services;
using Xunit;

namespace NeuroCare.UnitTests;

public class HelloServiceTests
{
    [Fact]
    public void GetHello_ShouldReturnCorrectMessage()
    {
        // Arrange
        var service = new HelloService();

        // Act
        var result = service.GetHello();

        // Assert
        Assert.Equal("Hello from NeuroCare!", result);
    }
}
