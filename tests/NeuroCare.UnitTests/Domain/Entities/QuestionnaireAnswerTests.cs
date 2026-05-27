using NeuroCare.Domain.Entities;
using Xunit;

namespace NeuroCare.UnitTests.Domain.Entities;

public class QuestionnaireAnswerTests
{
    [Fact]
    public void Constructor_ShouldCreateInstance_WhenValidArgumentsAreProvided()
    {
        // Arrange
        var screeningSessionId = Guid.NewGuid();
        var questionKey = "memory_recall";
        var answerValue = "frequent";
        var category = "Cognitive";

        // Act
        var result = new QuestionnaireAnswer(screeningSessionId, questionKey, answerValue, category);

        // Assert
        Assert.NotEqual(Guid.Empty, result.Id);
        Assert.Equal(screeningSessionId, result.ScreeningSessionId);
        Assert.Equal(questionKey, result.QuestionKey);
        Assert.Equal(answerValue, result.AnswerValue);
        Assert.Equal(category, result.Category);
    }

    [Fact]
    public void Constructor_ShouldThrowArgumentException_WhenScreeningSessionIdIsEmpty()
    {
        // Arrange
        var screeningSessionId = Guid.Empty;
        var questionKey = "memory_recall";
        var answerValue = "frequent";

        // Act & Assert
        Assert.Throws<ArgumentException>(() => new QuestionnaireAnswer(screeningSessionId, questionKey, answerValue));
    }

    [Fact]
    public void Constructor_ShouldThrowArgumentException_WhenQuestionKeyIsEmpty()
    {
        // Arrange
        var screeningSessionId = Guid.NewGuid();
        var questionKey = "";
        var answerValue = "frequent";

        // Act & Assert
        Assert.Throws<ArgumentException>(() => new QuestionnaireAnswer(screeningSessionId, questionKey, answerValue));
    }
}
