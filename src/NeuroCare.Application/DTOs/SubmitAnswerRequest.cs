namespace NeuroCare.Application.DTOs;

public record SubmitAnswerRequest(Guid ScreeningSessionId, string QuestionKey, string AnswerValue, string? Category = null);
