namespace NeuroCare.Application.DTOs;

public record SubmitAnswerRequest(
    string QuestionKey,
    string AnswerValue,
    string? Category = null);
