using NeuroCare.Domain.Enums;

namespace NeuroCare.Domain.Entities;

public class ScreeningSession
{
    public Guid Id { get; private set; }
    public RespondentType RespondentType { get; private set; }
    public SessionStatus Status { get; private set; }
    public TriageLevel TriageLevel { get; private set; }
    public bool ConsentGiven { get; private set; }
    public DateTimeOffset? ConsentTimestamp { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset UpdatedAt { get; private set; }
    public DateTimeOffset? CompletedAt { get; private set; }

    private ScreeningSession() { } // For EF Core

    public ScreeningSession(RespondentType respondentType)
    {
        Id = Guid.NewGuid();
        RespondentType = respondentType;
        Status = SessionStatus.Started;
        TriageLevel = TriageLevel.None;
        ConsentGiven = false;
        CreatedAt = DateTimeOffset.UtcNow;
        UpdatedAt = CreatedAt;
    }

    public void GiveConsent()
    {
        if (ConsentGiven) return;

        ConsentGiven = true;
        ConsentTimestamp = DateTimeOffset.UtcNow;
        UpdatedAt = ConsentTimestamp.Value;
    }

    public void Complete(TriageLevel triageLevel)
    {
        Status = SessionStatus.Completed;
        TriageLevel = triageLevel;
        CompletedAt = DateTimeOffset.UtcNow;
        UpdatedAt = CompletedAt.Value;
    }

    public void Cancel()
    {
        Status = SessionStatus.Cancelled;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void UpdateStatus(SessionStatus status)
    {
        Status = status;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
