using System.Collections.Concurrent;
using NeuroCare.Domain.Entities;
using NeuroCare.Domain.Interfaces;

namespace NeuroCare.Infrastructure.Persistence;

public class InMemoryQuestionnaireAnswerRepository : IQuestionnaireAnswerRepository
{
    private static readonly ConcurrentBag<QuestionnaireAnswer> _answers = new();

    public Task AddAsync(QuestionnaireAnswer answer)
    {
        _answers.Add(answer);
        return Task.CompletedTask;
    }

    public Task<IEnumerable<QuestionnaireAnswer>> GetBySessionIdAsync(Guid sessionId)
    {
        var answers = _answers.Where(a => a.ScreeningSessionId == sessionId);
        return Task.FromResult(answers);
    }
}
