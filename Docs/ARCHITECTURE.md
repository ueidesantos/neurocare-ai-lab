# Architecture Overview

## Clean Architecture in .NET 10

The **neurocare-ai-lab** project follows the principles of **Clean Architecture** to ensure a decoupled, testable, and maintainable codebase. This structure separates high-level business logic from low-level implementation details like databases, UI frameworks, or third-party AI services.

### Core Layers

#### 1. Domain
- **Purpose:** Contains the core business entities, value objects, and domain logic.
- **Dependencies:** None. This is the heart of the application.
- **Key Components:** Questionnaire models, Triage rule definitions, Report entities.

#### 2. Application
- **Purpose:** Coordinates the execution of business use cases.
- **Dependencies:** Domain.
- **Key Components:** Commands, Queries, DTOs, Mapping logic, Interfaces for infrastructure services (e.g., `IAIService`, `IReportRepository`).

#### 3. Infrastructure
- **Purpose:** Implements technical concerns such as data persistence, external API integrations, and AI service providers.
- **Dependencies:** Application, Domain.
- **Key Components:** EF Core DbContext, AI Client implementations (using LLM abstractions), External loggers.

#### 4. API (Presentation)
- **Purpose:** The entry point for external requests (REST API).
- **Dependencies:** Application, Infrastructure.
- **Key Components:** Controllers, Middleware, Request/Response models, Dependency Injection configuration.

#### 5. Tests
- **Purpose:** Ensures the reliability and correctness of all layers.
- **Categories:**
  - **Unit Tests:** Focus on Domain logic and Application use cases.
  - **Integration Tests:** Focus on Infrastructure implementations and API endpoints.
  - **Safety Tests:** Specific tests for AI guardrails and non-diagnostic output verification.

### Key Architectural Decisions

- **Deterministic Triage:** All triage logic must reside in the Domain layer as deterministic code (Rules Engine), never delegated to the LLM.
- **LLM Abstraction:** All interactions with Generative AI must happen through interfaces defined in the Application layer, with implementations in Infrastructure.
- **Fake AI First:** A `FakeAIProvider` should be used during development and testing to reduce costs and ensure predictable behavior before switching to real providers.
- **Audit Trail:** Every generated report must be traceable back to the specific version of the questionnaire and the ruleset used for triage.
