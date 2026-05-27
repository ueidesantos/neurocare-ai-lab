using NeuroCare.Application.DTOs;

namespace NeuroCare.Application.Interfaces;

public interface IScreeningSessionService
{
    Task<ScreeningSessionDto> CreateSessionAsync(CreateSessionRequest request);
    Task<ScreeningSessionDto?> GetSessionAsync(Guid id);
    Task<bool> GiveConsentAsync(Guid sessionId);
    Task<bool> SubmitAnswerAsync(Guid sessionId, SubmitAnswerRequest request);
}
