using NeuroCare.Application.DTOs;
using NeuroCare.Application.Interfaces;
using NeuroCare.Domain.Entities;
using NeuroCare.Domain.Interfaces;

namespace NeuroCare.Application.UseCases;

public class ScreeningSessionService : IScreeningSessionService
{
    private readonly IScreeningSessionRepository _sessionRepository;
    private readonly IQuestionnaireAnswerRepository _answerRepository;

    public ScreeningSessionService(
        IScreeningSessionRepository sessionRepository,
        IQuestionnaireAnswerRepository answerRepository)
    {
        _sessionRepository = sessionRepository;
        _answerRepository = answerRepository;
    }

    public async Task<ScreeningSessionDto> CreateSessionAsync(CreateSessionRequest request)
    {
        var session = new ScreeningSession(request.RespondentType);
        await _sessionRepository.AddAsync(session);

        return MapToDto(session);
    }

    public async Task<ScreeningSessionDto?> GetSessionAsync(Guid id)
    {
        var session = await _sessionRepository.GetByIdAsync(id);
        return session != null ? MapToDto(session) : null;
    }

    public async Task<bool> GiveConsentAsync(Guid sessionId)
    {
        var session = await _sessionRepository.GetByIdAsync(sessionId);
        if (session == null) return false;

        session.GiveConsent();
        await _sessionRepository.UpdateAsync(session);
        return true;
    }

    public async Task<bool> SubmitAnswerAsync(Guid sessionId, SubmitAnswerRequest request)
    {
        var session = await _sessionRepository.GetByIdAsync(sessionId);
        if (session == null) return false;

        var answer = new QuestionnaireAnswer(
            sessionId,
            request.QuestionKey,
            request.AnswerValue,
            request.Category);

        await _answerRepository.AddAsync(answer);
        return true;
    }

    private static ScreeningSessionDto MapToDto(ScreeningSession session)
    {
        return new ScreeningSessionDto(
            session.Id,
            session.RespondentType,
            session.Status,
            session.TriageLevel,
            session.ConsentGiven,
            session.ConsentTimestamp,
            session.CreatedAt,
            session.UpdatedAt,
            session.CompletedAt);
    }
}
