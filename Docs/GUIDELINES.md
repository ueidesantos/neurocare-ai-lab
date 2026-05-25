# Technical and Safety Guidelines

## Development Guidelines

### 1. Deterministic Triage
- **Rule:** Never use an LLM to decide the priority or clinical suspicion level of a case.
- **Implementation:** Implement triage logic using deterministic rules (e.g., scoring systems, decision trees) in the Domain layer.
- **Verification:** Write unit tests to cover all possible scoring outcomes and edge cases in the triage rules.

### 2. Generative AI Usage
- **Restricted Scope:** Use LLMs strictly for:
    - Summarizing questionnaire responses.
    - Improving the clarity and tone of the report for healthcare professional reading.
    - Organizing data into a structured layout.
- **Abstractions:** Always use the `IAIService` interface (or similar) from the Application layer. Never instantiate AI clients directly in use cases.
- **Guardrails:** Implement output validation to ensure the LLM does not include diagnostic language, treatment advice, or probabilities.

### 3. Data Privacy and Synthetic Data
- **Synthetic Data Only:** During development and testing, use only synthetic, non-identifiable data.
- **No PII:** Never commit or process actual Patient Identifiable Information (PII) within this lab environment.
- **Anonymization:** If real patterns are needed, they must be fully anonymized before use.

### 4. Versioning
- **Questionnaires:** Questionnaire versions must be tracked. A report must reference the specific version of the questionnaire used.
- **Rulesets:** Triage rules should be versioned alongside the code or via a configuration mechanism.
- **Prompts:** AI prompts must be versioned and stored as part of the source code (e.g., in resources or specialized prompt files) to allow for auditing and reproducibility.

### 5. Observability and Audit Trail
- **Logging:** Log all inputs to and outputs from the LLM (while ensuring no PII is included).
- **Auditability:** Every generated report must contain a footer or metadata indicating it is AI-generated and non-diagnostic, and which ruleset version was applied.

## Testing Standards
- **Green-Path Tests:** Standard unit tests for expected functionality.
- **Safety (Red-Team) Tests:** Attempts to force the LLM to provide a diagnosis or medical advice. These must be blocked by guardrails.
- **Deterministic Verification:** Tests that ensure the same questionnaire inputs always result in the same deterministic triage priority.
