# Gestão de Riscos e Segurança Cibernética

Este documento estabelece as diretrizes de segurança e gestão de riscos para o projeto **Clareza Cognitiva**, baseando-se nos padrões globais da **OWASP** e nas prioridades estratégicas de cibersegurança do **Gartner (2025)**.

---

## 1. Alinhamento com OWASP

O projeto compromete-se com a mitigação das vulnerabilidades mais críticas em aplicações web e sistemas de IA:

### 1.1. OWASP Top 10 (Web)
- **A01:2021-Broken Access Control:** Implementação de controles rigorosos de acesso aos dados sensíveis de saúde.
- **A03:2021-Injection:** Prevenção de injeções (incluindo SQL e comandos) através de parametrização e validação rigorosa de inputs.
- **A04:2021-Insecure Design:** Aplicação de princípios de *Security by Design* desde a concepção da arquitetura Clean Architecture.

### 1.2. OWASP Top 10 para LLM (Large Language Models)
- **LLM01: Prompt Injection:** Implementação de camadas de filtragem e sanitização para evitar que usuários manipulem o comportamento do motor de IA.
- **LLM02: Insecure Output Handling:** Validação rigorosa das saídas geradas pela IA (Guardrails) antes da exibição no relatório final.
- **LLM06: Sensitive Information Disclosure:** Garantia de que dados sensíveis (PII/PHI) não sejam enviados para treinamento de modelos externos ou expostos inadvertidamente.

---

## 2. Prioridades Gartner 2025

Seguindo as tendências globais identificadas pelo Gartner, o **Clareza Cognitiva** prioriza:

### 2.1. GenAI para Segurança de Dados não Estruturados
Dado que o projeto coleta relatos livres (dados não estruturados) de cuidadores e pacientes, nossa estratégia foca na proteção de textos, imagens ou áudios que possam compor o histórico clínico, garantindo que a IA generativa trate esses dados com o mesmo rigor que dados estruturados.

### 2.2. Gerenciamento de Identidades de Máquina
Proteção de credenciais e tokens utilizados para comunicação entre o sistema e provedores de serviços de IA/LLM, evitando a expansão da superfície de ataque por identidades não gerenciadas.

### 2.3. Resiliência Cibernética e Cultura
- **Foco em Resiliência:** O sistema deve ser capaz de manter a integridade das regras de triagem determinísticas mesmo sob condições adversas.
- **Cultura de Segurança:** Agentes de IA e desenvolvedores devem seguir as diretrizes do `AGENTS.md` como parte fundamental da cultura de segurança do laboratório.

---

## 3. Aplicação Prática no Projeto

1.  **Dados Sensíveis:** Todo tratamento de dados de saúde deve seguir a [LGPD](lgpd.md).
2.  **Triagem Determinística:** A decisão clínica nunca é delegada à IA, mitigando riscos de "alucinações" ou decisões enviesadas.
3.  **Auditoria:** Registro de logs de todas as interações com o motor de IA para rastreabilidade de segurança.

---
*Este documento reflete o compromisso do neurocare-ai-lab com a segurança e a ética no uso de IA.*
