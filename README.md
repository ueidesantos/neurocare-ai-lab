# neurocare-ai-lab

AI-assisted cognitive report lab built with **.NET 10**, focused on structured questionnaires, deterministic triage rules, responsible AI guardrails, auditability, and the generation of non-diagnostic reports for healthcare conversations.

## 🚀 Overview

The **neurocare-ai-lab** is an educational project designed to explore best practices in software engineering and Generative AI within a sensitive domain. It simulates a system for generating structured cognitive reports based on caregiver observations, emphasizing safety and clinical responsibility.

### ⚠️ Important Disclaimer
**This is an educational laboratory, not a medical device.**
- It **does not** provide diagnoses (e.g., Alzheimer's, Dementia).
- It **does not** replace professional medical judgment.
- It is intended for **learning and research purposes only**.

## 📖 Documentation

Detailed documentation is available in the [Docs](./Docs) folder:

- **[Project Mission & Ethics](./Docs/MISSION.md):** Our commitment to Responsible AI and the project's educational goals.
- **[Architecture Overview](./Docs/ARCHITECTURE.md):** Details on Clean Architecture, .NET 10 implementation, and key technical decisions.
- **[Safety & Technical Guidelines](./Docs/GUIDELINES.md):** Rules for deterministic triage, LLM abstractions, and data privacy.

## 🛠️ Key Features

- **Clean Architecture:** Strict separation of concerns (Domain, Application, Infrastructure, API).
- **Deterministic Triage:** Priority logic is hard-coded and testable, not handled by AI.
- **Responsible AI Guardrails:** Built-in checks to prevent diagnostic outputs.
- **Auditability:** Full traceability of report generation, including ruleset and questionnaire versions.
- **Privacy-First:** Use of synthetic data and local-first AI abstractions for development.

## ⚙️ Getting Started

*(Instructions for setting up the environment, running tests, and starting the API will be added as the implementation progresses.)*

## 📜 License

This project is licensed under the [LICENSE](./LICENSE) file.
