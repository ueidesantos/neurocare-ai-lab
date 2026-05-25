# Limites Clínicos e Éticos - Clareza Cognitiva

Este documento detalha as fronteiras de atuação, restrições éticas e diretrizes de comunicação do projeto **Clareza Cognitiva**. Como um laboratório educacional de IA Responsável, a aderência a estes limites é obrigatória.

---

## 1. Posicionamento Fundamental
O **Clareza Cognitiva** é uma ferramenta de **apoio à jornada clínica**. Ele atua exclusivamente na triagem, organização de histórico e orientação educativa.

### O que o sistema É:
- Um assistente de organização de relatos para familiares e pacientes.
- Um gerador de relatórios estruturados para facilitar a consulta médica.
- Um motor de triagem baseado em regras determinísticas para identificar sinais de alerta.

### O que o sistema NÃO É:
- Uma ferramenta de diagnóstico.
- Um substituto para a avaliação médica ou neuropsicológica.
- Um calculador de probabilidade de doenças.

---

## 2. Restrições Éticas Inegociáveis (Safety Guardrails)

1. **NUNCA Diagnosticar:** O sistema jamais deve emitir frases determinísticas como "Você tem Alzheimer", "Este quadro é demência" ou "A probabilidade de doença é de X%".
2. **NUNCA Prescrever:** Não sugerir medicamentos, suplementos ou exames específicos em tom de ordem. Use sempre: *"Converse com seu médico sobre a necessidade de..."*.
3. **Tom de Voz:** Deve ser acolhedor, profissional e cauteloso. Evite termos alarmistas (ex: "grave", "crítico", "perigoso") sem contexto clínico estruturado.
4. **Prevenção de Falsa Segurança:** Nunca diga "Está tudo bem" ou "Não há risco". Use: *"Não foram identificados alertas relevantes nas respostas fornecidas neste momento"*.

---

## 3. Anti-Escopo (O que não fazemos)
- Diagnóstico automático de Alzheimer ou outras demências.
- Interpretação autônoma de biomarcadores (exames de sangue, líquor ou imagem).
- Decisões clínicas baseadas puramente em modelos de linguagem (LLM).
- Recomendação direta de conduta terapêutica.

---

## 4. Diretrizes de Comunicação de Risco
A comunicação deve focar em **necessidade de avaliação** e não em **presença de doença**.

| Termo a Evitar | Termo Preferencial |
| :--- | :--- |
| "Alto risco de Alzheimer" | "Necessidade de avaliação profissional prioritária" |
| "Sinais graves" | "Sinais de alerta que justificam investigação" |
| "Chance de ter demência" | "Perfil compatível com necessidade de investigação clínica" |
| "Exame confirma doença" | "Ponto relevante para discussão com o especialista" |

---

## 5. Triagem Determinística vs. IA Generativa
Para garantir a segurança e explicabilidade, a lógica de triagem segue estes princípios:

- **Decisões de Prioridade:** São tomadas por um motor de regras (if/else/patterns) em C#, baseado em escalas validadas e sinais de alerta pré-definidos. **A IA Generativa nunca decide o nível de prioridade.**
- **Papel da IA:** A IA é usada apenas para:
    - Sumarizar relatos livres.
    - Organizar a linha do tempo dos sintomas.
    - Melhorar a clareza da comunicação no relatório.
    - Sugerir perguntas para o paciente levar à consulta.

---

## 6. Sinais de Alerta Críticos
Caso algum destes sinais seja identificado, o sistema deve orientar busca por avaliação profissional com prioridade:
- Mudança súbita no estado de confusão mental (Delirium).
- Riscos imediatos de segurança (ex: esquecer fogão ligado, se perder).
- Alucinações ou alterações comportamentais agudas.
- Impacto severo e recente na autonomia (finanças, medicação).

---

## 7. Conformidade e Regulação (SaMD)
Este software é posicionado como uma ferramenta educativa e de suporte administrativo à consulta. Para evitar o enquadramento não planejado como dispositivo médico (SaMD - Software as a Medical Device) sob a RDC 657/2022 da Anvisa no estágio atual:
- Não declaramos finalidade diagnóstica ou preditiva.
- Mantemos o profissional de saúde como o único tomador de decisão clínica.
- Documentamos claramente que o relatório é um apoio à anamnese.

---
**Clareza Cognitiva** - *Compromisso com a IA Ética e Responsável na Saúde.*
