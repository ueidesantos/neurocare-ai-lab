namespace NeuroCare.Application.DTOs;

public record SubmitAnswerRequest(
    string QuestionKey,
    string AnswerValue,
    string? Category = null);
public record SubmitAnswerRequest(Guid ScreeningSessionId, string QuestionKey, string AnswerValue, string? Category = null);
