using Moq;
using NeuroCare.Application.DTOs;
using NeuroCare.Application.UseCases;
using NeuroCare.Domain.Entities;
using NeuroCare.Domain.Enums;
using NeuroCare.Domain.Interfaces;
using Xunit;

namespace NeuroCare.UnitTests.Application;

public class ScreeningSessionServiceTests
{
    private readonly Mock<IScreeningSessionRepository> _sessionRepositoryMock;
    private readonly Mock<IQuestionnaireAnswerRepository> _answerRepositoryMock;
    private readonly ScreeningSessionService _service;

    public ScreeningSessionServiceTests()
    {
        _sessionRepositoryMock = new Mock<IScreeningSessionRepository>();
        _answerRepositoryMock = new Mock<IQuestionnaireAnswerRepository>();
        _service = new ScreeningSessionService(_sessionRepositoryMock.Object, _answerRepositoryMock.Object);
    }

    [Fact]
    public async Task CreateSessionAsync_ShouldReturnSessionDto()
    {
        // Arrange
        var request = new CreateSessionRequest(RespondentType.Patient);

        // Act
        var result = await _service.CreateSessionAsync(request);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(RespondentType.Patient, result.RespondentType);
        _sessionRepositoryMock.Verify(r => r.AddAsync(It.IsAny<ScreeningSession>()), Times.Once);
    }

    [Fact]
    public async Task GetSessionAsync_WhenSessionExists_ShouldReturnDto()
    {
        // Arrange
        var sessionId = Guid.NewGuid();
        var session = new ScreeningSession(RespondentType.Patient);
        _sessionRepositoryMock.Setup(r => r.GetByIdAsync(sessionId)).ReturnsAsync(session);

        // Act
        var result = await _service.GetSessionAsync(sessionId);

        // Assert
        Assert.NotNull(result);
        _sessionRepositoryMock.Verify(r => r.GetByIdAsync(sessionId), Times.Once);
    }

    [Fact]
    public async Task GiveConsentAsync_WhenSessionExists_ShouldUpdateSession()
    {
        // Arrange
        var sessionId = Guid.NewGuid();
        var session = new ScreeningSession(RespondentType.Patient);
        _sessionRepositoryMock.Setup(r => r.GetByIdAsync(sessionId)).ReturnsAsync(session);

        // Act
        var result = await _service.GiveConsentAsync(sessionId);

        // Assert
        Assert.True(result);
        Assert.True(session.ConsentGiven);
        _sessionRepositoryMock.Verify(r => r.UpdateAsync(session), Times.Once);
    }

    [Fact]
    public async Task SubmitAnswerAsync_WhenSessionExists_ShouldAddAnswer()
    {
        // Arrange
        var sessionId = Guid.NewGuid();
        var session = new ScreeningSession(RespondentType.Patient);
        var request = new SubmitAnswerRequest("q1", "a1", "cat1");
        _sessionRepositoryMock.Setup(r => r.GetByIdAsync(sessionId)).ReturnsAsync(session);

        // Act
        var result = await _service.SubmitAnswerAsync(sessionId, request);

        // Assert
        Assert.True(result);
        _answerRepositoryMock.Verify(r => r.AddAsync(It.IsAny<QuestionnaireAnswer>()), Times.Once);
    }
}
