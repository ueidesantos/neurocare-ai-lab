namespace NeuroCare.Domain.Entities;

public class PatientProfile
{
    public Guid Id { get; private set; }
    public string Name { get; private set; }
    public int Age { get; private set; }
    public string EducationLevel { get; private set; }

    public PatientProfile(string name, int age, string educationLevel)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("Name cannot be empty.", nameof(name));

        if (age < 0)
            throw new ArgumentOutOfRangeException(nameof(age), "Age cannot be negative.");

        if (string.IsNullOrWhiteSpace(educationLevel))
            throw new ArgumentException("Education level cannot be empty.", nameof(educationLevel));

        Id = Guid.NewGuid();
        Name = name;
        Age = age;
        EducationLevel = educationLevel;
    }
}
