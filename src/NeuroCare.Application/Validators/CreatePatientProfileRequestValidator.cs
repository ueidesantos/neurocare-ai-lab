using FluentValidation;
using NeuroCare.Application.DTOs;

namespace NeuroCare.Application.Validators;

public class CreatePatientProfileRequestValidator : AbstractValidator<CreatePatientProfileRequest>
{
    public CreatePatientProfileRequestValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty().WithMessage("Name is required.")
            .MaximumLength(100).WithMessage("Name must not exceed 100 characters.");

        RuleFor(x => x.Age)
            .InclusiveBetween(0, 150).WithMessage("Age must be between 0 and 150.");

        RuleFor(x => x.EducationLevel)
            .NotEmpty().WithMessage("Education level is required.");
    }
}
