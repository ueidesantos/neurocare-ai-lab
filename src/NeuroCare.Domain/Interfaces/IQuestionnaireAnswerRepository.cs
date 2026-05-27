using NeuroCare.Domain.Entities;

namespace NeuroCare.Domain.Interfaces;

public interface IQuestionnaireAnswerRepository
{
    Task AddAsync(QuestionnaireAnswer answer);
    Task<IEnumerable<QuestionnaireAnswer>> GetBySessionIdAsync(Guid sessionId);
}
