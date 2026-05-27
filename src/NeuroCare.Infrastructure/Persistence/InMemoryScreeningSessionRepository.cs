using System.Collections.Concurrent;
using NeuroCare.Domain.Entities;
using NeuroCare.Domain.Interfaces;

namespace NeuroCare.Infrastructure.Persistence;

public class InMemoryScreeningSessionRepository : IScreeningSessionRepository
{
    private static readonly ConcurrentDictionary<Guid, ScreeningSession> _sessions = new();

    public Task<ScreeningSession?> GetByIdAsync(Guid id)
    {
        _sessions.TryGetValue(id, out var session);
        return Task.FromResult(session);
    }

    public Task AddAsync(ScreeningSession session)
    {
        _sessions.TryAdd(session.Id, session);
        return Task.CompletedTask;
    }

    public Task UpdateAsync(ScreeningSession session)
    {
        _sessions[session.Id] = session;
        return Task.CompletedTask;
    }
}
