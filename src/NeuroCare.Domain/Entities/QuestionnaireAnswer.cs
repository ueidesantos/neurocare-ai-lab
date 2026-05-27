namespace NeuroCare.Domain.Entities;

public class QuestionnaireAnswer : Entity
{
    public Guid ScreeningSessionId { get; private set; }
    public string QuestionKey { get; private set; } = string.Empty;
    public string AnswerValue { get; private set; } = string.Empty;
    public string? Category { get; private set; }

    // For EF Core
    private QuestionnaireAnswer() { }

    public QuestionnaireAnswer(Guid screeningSessionId, string questionKey, string answerValue, string? category = null)
    {
        if (screeningSessionId == Guid.Empty)
            throw new ArgumentException("ScreeningSessionId cannot be empty", nameof(screeningSessionId));

        if (string.IsNullOrWhiteSpace(questionKey))
            throw new ArgumentException("QuestionKey cannot be empty", nameof(questionKey));

        ScreeningSessionId = screeningSessionId;
        QuestionKey = questionKey;
        AnswerValue = answerValue;
        Category = category;
    }
}
