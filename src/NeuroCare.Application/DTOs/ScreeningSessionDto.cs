using NeuroCare.Domain.Enums;

namespace NeuroCare.Application.DTOs;

public record ScreeningSessionDto(
    Guid Id,
    RespondentType RespondentType,
    SessionStatus Status,
    TriageLevel TriageLevel,
    bool ConsentGiven,
    DateTimeOffset? ConsentTimestamp,
    DateTimeOffset CreatedAt,
    DateTimeOffset UpdatedAt,
    DateTimeOffset? CompletedAt);
