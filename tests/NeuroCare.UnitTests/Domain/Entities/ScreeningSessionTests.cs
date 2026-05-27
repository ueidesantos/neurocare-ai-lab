using NeuroCare.Domain.Entities;
using NeuroCare.Domain.Enums;
using Xunit;

namespace NeuroCare.UnitTests.Domain.Entities;

public class ScreeningSessionTests
{
    [Fact]
    public void Constructor_ShouldInitializeCorrectly()
    {
        // Arrange
        var respondentType = RespondentType.Patient;

        // Act
        var session = new ScreeningSession(respondentType);

        // Assert
        Assert.NotEqual(Guid.Empty, session.Id);
        Assert.Equal(respondentType, session.RespondentType);
        Assert.Equal(SessionStatus.Started, session.Status);
        Assert.Equal(TriageLevel.None, session.TriageLevel);
        Assert.False(session.ConsentGiven);
        Assert.Null(session.ConsentTimestamp);
        Assert.True((DateTimeOffset.UtcNow - session.CreatedAt).TotalSeconds < 5);
        Assert.Equal(session.CreatedAt, session.UpdatedAt);
    }

    [Fact]
    public void GiveConsent_ShouldUpdateConsentStatus()
    {
        // Arrange
        var session = new ScreeningSession(RespondentType.Caregiver);

        // Act
        session.GiveConsent();

        // Assert
        Assert.True(session.ConsentGiven);
        Assert.NotNull(session.ConsentTimestamp);
        Assert.True((DateTimeOffset.UtcNow - session.ConsentTimestamp.Value).TotalSeconds < 5);
        Assert.Equal(session.ConsentTimestamp, session.UpdatedAt);
    }

    [Fact]
    public void Complete_ShouldUpdateStatusAndTriageLevel()
    {
        // Arrange
        var session = new ScreeningSession(RespondentType.Patient);
        var triageLevel = TriageLevel.Priority;

        // Act
        session.Complete(triageLevel);

        // Assert
        Assert.Equal(SessionStatus.Completed, session.Status);
        Assert.Equal(triageLevel, session.TriageLevel);
        Assert.NotNull(session.CompletedAt);
        Assert.Equal(session.CompletedAt, session.UpdatedAt);
    }

    [Fact]
    public void Cancel_ShouldUpdateStatus()
    {
        // Arrange
        var session = new ScreeningSession(RespondentType.Patient);

        // Act
        session.Cancel();

        // Assert
        Assert.Equal(SessionStatus.Cancelled, session.Status);
    }
}
