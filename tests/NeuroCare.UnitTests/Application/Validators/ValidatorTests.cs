using NeuroCare.Application.DTOs;
using NeuroCare.Application.Validators;
using NeuroCare.Domain.Enums;
using Xunit;

namespace NeuroCare.UnitTests.Application.Validators;

public class ValidatorTests
{
    private readonly CreatePatientProfileRequestValidator _patientValidator;
    private readonly StartScreeningSessionRequestValidator _sessionValidator;
    private readonly SubmitAnswerRequestValidator _answerValidator;

    public ValidatorTests()
    {
        _patientValidator = new CreatePatientProfileRequestValidator();
        _sessionValidator = new StartScreeningSessionRequestValidator();
        _answerValidator = new SubmitAnswerRequestValidator();
    }

    [Fact]
    public void CreatePatientProfileRequestValidator_Should_Be_Valid()
    {
        var request = new CreatePatientProfileRequest("John Doe", 70, "Higher Education");
        var result = _patientValidator.Validate(request);
        Assert.True(result.IsValid);
    }

    [Theory]
    [InlineData("", 70, "Higher Education")]
    [InlineData("John Doe", -1, "Higher Education")]
    [InlineData("John Doe", 151, "Higher Education")]
    [InlineData("John Doe", 70, "")]
    public void CreatePatientProfileRequestValidator_Should_Be_Invalid(string name, int age, string educationLevel)
    {
        var request = new CreatePatientProfileRequest(name, age, educationLevel);
        var result = _patientValidator.Validate(request);
        Assert.False(result.IsValid);
    }

    [Fact]
    public void StartScreeningSessionRequestValidator_Should_Be_Valid()
    {
        var request = new StartScreeningSessionRequest(RespondentType.Patient);
        var result = _sessionValidator.Validate(request);
        Assert.True(result.IsValid);
    }

    [Fact]
    public void StartScreeningSessionRequestValidator_Should_Be_Invalid()
    {
        var request = new StartScreeningSessionRequest((RespondentType)99);
        var result = _sessionValidator.Validate(request);
        Assert.False(result.IsValid);
    }

    [Fact]
    public void SubmitAnswerRequestValidator_Should_Be_Valid()
    {
        var request = new SubmitAnswerRequest(Guid.NewGuid(), "mem_01", "Yes");
        var result = _answerValidator.Validate(request);
        Assert.True(result.IsValid);
    }

    [Theory]
    [InlineData("00000000-0000-0000-0000-000000000000", "mem_01", "Yes")]
    [InlineData("771a3d9b-76f5-4f40-848e-f5f745772658", "", "Yes")]
    [InlineData("771a3d9b-76f5-4f40-848e-f5f745772658", "mem_01", "")]
    public void SubmitAnswerRequestValidator_Should_Be_Invalid(string guidStr, string questionKey, string answerValue)
    {
        var request = new SubmitAnswerRequest(Guid.Parse(guidStr), questionKey, answerValue);
        var result = _answerValidator.Validate(request);
        Assert.False(result.IsValid);
    }
}
