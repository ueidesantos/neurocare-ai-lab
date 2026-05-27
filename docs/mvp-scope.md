# Escopo do MVP - Clareza Cognitiva

Este documento detalha o escopo do Produto Mínimo Viável (MVP) para o projeto **Clareza Cognitiva**, um laboratório de IA Generativa e Engenharia de Software focado em triagem cognitiva responsável.

---

## 🎯 Visão do Produto

O **Clareza Cognitiva** é uma plataforma de triagem cognitiva e organização clínica que ajuda pacientes, familiares e profissionais a identificar sinais de alerta, estruturar a história dos sintomas e levar um relatório útil para avaliação médica.

**O que o projeto é:** Um laboratório educacional de IA Responsável.
**O que o projeto NÃO é:** Um dispositivo médico de diagnóstico ou uma ferramenta de predição de doenças.

---

## ❓ Statement do Problema

Famílias percebem mudanças cognitivas, mas enfrentam atrasos no diagnóstico por não saberem diferenciar o envelhecimento normal de sinais iniciais de declínio. No Brasil, estima-se que cerca de 80% dos casos de demência não são diagnosticados, e a jornada diagnóstica é frequentemente caótica e desorganizada.

---

## 👤 Personas

- **Mariana (Familiar Cuidador):** Percebe mudanças na mãe e precisa saber se deve procurar um médico e como organizar os relatos.
- **Roberto (Paciente):** Sente lapsos de memória e busca orientação cuidadosa sem alarmismo.
- **Dra. Ana (Profissional de Saúde):** Recebe relatos desorganizados e deseja um resumo clínico estruturado para otimizar a consulta.

---

## 🚀 Escopo Funcional (MVP)

### 1. Governança e Segurança
- Coleta de consentimento explícito e avisos de não diagnóstico (LGPD).
- Política de privacidade e termos de uso claros.
- Trilha de auditoria para aceites e gerações de relatórios.

### 2. Coleta de Dados (Questionários)
- Questionários estruturados para paciente e familiar/cuidador (ver [Esquema do Questionário](clinical/questionario-schema.md)).
- Avaliação de domínios cognitivos: Memória, Linguagem, Orientação, Atenção e Execução.
- Avaliação de impacto funcional (Atividades de Vida Diária).
- Identificação de **Fatores Confundidores** (sono, humor, medicamentos, audição/visão).
- Identificação de **Sinais de Alerta** (segurança, piora súbita).

### 3. Motor de Triagem Determinístico
- Classificação de prioridade baseada em regras em código C# (não no LLM).
- Níveis de Atenção:
  - **0. Sem alerta evidente:** Sintomas leves sem impacto funcional.
  - **1. Atenção:** Queixas recorrentes com pouco impacto funcional.
  - **2. Avaliação recomendada:** Sintomas progressivos e impacto funcional claro.
  - **3. Avaliação prioritária:** Sinais de alerta, risco de segurança ou mudança súbita.

### 4. Relatório Clínico Estruturado
- Geração de relatório em PDF para levar ao médico.
- Inclusão de linha do tempo dos sintomas e resumo dos achados.
- Sugestões de pontos para discutir com o profissional de saúde.

### 5. IA Generativa Responsável
- Uso de LLM apenas para resumir relatos livres e melhorar a fluidez da comunicação no relatório.
- Implementação de **Guardrails** para evitar linguagem diagnóstica, alarmismo ou prescrições.
- Versionamento de prompts e auditoria de saídas.

---

## 🚫 Anti-escopo (O que não faremos)

- **Diagnóstico automático:** O sistema nunca dirá "Você tem Alzheimer".
- **Cálculo de probabilidade:** Não forneceremos porcentagens de risco de doenças.
- **Prescrição médica:** Não recomendaremos exames específicos ou medicamentos.
- **Decisão por LLM:** A IA generativa nunca decidirá o nível de prioridade clínica.

---

## 🛠️ Backlog de Engenharia (Épicos)

1. **Foundation & Domain:** Estrutura da Clean Architecture e lógica de domínio.
2. **Questionnaire Engine:** Motor de questionários e persistência de respostas.
3. **Report Generation:** Geração de documentos e exportação para PDF.
4. **Generative AI Integration:** Gateway para LLM e engenharia de prompts.
5. **AI Safety & Guardrails:** Filtros de saída e validação de termos proibidos.
6. **Observability & Audit:** Telemetria, logs estruturados e rastreabilidade.
7. **RAG & Knowledge Base:** (Futuro) Base de conhecimento para apoio à educação em saúde.

---
*Este documento é evolutivo e deve ser atualizado conforme o desenvolvimento do laboratório.*
