using FluentValidation;
using NeuroCare.Application.DTOs;

namespace NeuroCare.Application.Validators;

public class StartScreeningSessionRequestValidator : AbstractValidator<StartScreeningSessionRequest>
{
    public StartScreeningSessionRequestValidator()
    {
        RuleFor(x => x.RespondentType)
            .IsInEnum().WithMessage("Invalid respondent type.");
    }
}
