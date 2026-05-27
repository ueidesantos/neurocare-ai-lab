using FluentValidation;
using NeuroCare.Application.DTOs;

namespace NeuroCare.Application.Validators;

public class SubmitAnswerRequestValidator : AbstractValidator<SubmitAnswerRequest>
{
    public SubmitAnswerRequestValidator()
    {
        RuleFor(x => x.ScreeningSessionId)
            .NotEmpty().WithMessage("Screening session ID is required.");

        RuleFor(x => x.QuestionKey)
            .NotEmpty().WithMessage("Question key is required.");

        RuleFor(x => x.AnswerValue)
            .NotEmpty().WithMessage("Answer value is required.");
    }
}
