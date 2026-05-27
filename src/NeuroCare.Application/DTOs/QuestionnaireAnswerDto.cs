namespace NeuroCare.Application.DTOs;

public record QuestionnaireAnswerDto(
    Guid Id,
    Guid ScreeningSessionId,
    string QuestionKey,
    string AnswerValue,
    string? Category);
