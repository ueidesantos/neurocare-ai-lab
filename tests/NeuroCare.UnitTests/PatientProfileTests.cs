using NeuroCare.Domain.Entities;
using Xunit;

namespace NeuroCare.UnitTests;

public class PatientProfileTests
{
    [Fact]
    public void Constructor_WithValidParameters_ShouldCreatePatientProfile()
    {
        // Arrange
        string name = "John Doe";
        int age = 72;
        string educationLevel = "High School";

        // Act
        var patient = new PatientProfile(name, age, educationLevel);

        // Assert
        Assert.NotEqual(Guid.Empty, patient.Id);
        Assert.Equal(name, patient.Name);
        Assert.Equal(age, patient.Age);
        Assert.Equal(educationLevel, patient.EducationLevel);
    }

    [Theory]
    [InlineData("")]
    [InlineData(" ")]
    [InlineData(null)]
    public void Constructor_WithEmptyName_ShouldThrowArgumentException(string? invalidName)
    {
        // Arrange
        int age = 72;
        string educationLevel = "High School";

        // Act & Assert
        Assert.Throws<ArgumentException>(() => new PatientProfile(invalidName!, age, educationLevel));
    }

    [Fact]
    public void Constructor_WithNegativeAge_ShouldThrowArgumentOutOfRangeException()
    {
        // Arrange
        string name = "John Doe";
        int age = -1;
        string educationLevel = "High School";

        // Act & Assert
        Assert.Throws<ArgumentOutOfRangeException>(() => new PatientProfile(name, age, educationLevel));
    }

    [Theory]
    [InlineData("")]
    [InlineData(" ")]
    [InlineData(null)]
    public void Constructor_WithEmptyEducationLevel_ShouldThrowArgumentException(string? invalidEducation)
    {
        // Arrange
        string name = "John Doe";
        int age = 72;

        // Act & Assert
        Assert.Throws<ArgumentException>(() => new PatientProfile(name, age, invalidEducation!));
    }
}
