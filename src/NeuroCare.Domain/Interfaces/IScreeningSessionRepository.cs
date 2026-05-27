using NeuroCare.Domain.Entities;

namespace NeuroCare.Domain.Interfaces;

public interface IScreeningSessionRepository
{
    Task<ScreeningSession?> GetByIdAsync(Guid id);
    Task AddAsync(ScreeningSession session);
    Task UpdateAsync(ScreeningSession session);
}
