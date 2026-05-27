# Esquema do Questionário de Triagem - Neuro Care

Este documento define a estrutura, as perguntas e a lógica de categorias para o questionário de triagem cognitiva. Este esquema serve como base tanto para a interface do usuário (Frontend) quanto para o motor de triagem determinístico (Backend).

---

## 1. Bloco A: Contexto e Perfil (Context)
*Objetivo: Identificar o perfil sociodemográfico e quem está respondendo.*

| Chave (QuestionKey) | Pergunta | Tipo de Resposta | Observação |
| :--- | :--- | :--- | :--- |
| `respondent_type` | Quem está preenchendo este questionário? | Opções: Paciente, Familiar/Cuidador | Define o tom das perguntas seguintes. |
| `patient_age` | Qual a idade da pessoa avaliada? | Numérico | Relevante para interpretação clínica. |
| `education_level` | Qual o nível de escolaridade? | Opções: Analfabeto, Fundamental, Médio, Superior | Influencia o desempenho cognitivo esperado. |
| `previous_diagnosis` | Já existe algum diagnóstico neurológico prévio (ex: AVC, Parkinson)? | Sim/Não | Importante para contextualizar novos sintomas. |

---

## 2. Bloco B: Queixa Principal e Evolução (Chief Complaint)
*Objetivo: Entender o início e a progressão dos sintomas.*

| Chave (QuestionKey) | Pergunta | Tipo de Resposta | Alerta |
| :--- | :--- | :--- | :--- |
| `complaint_description` | Qual a principal mudança ou preocupação percebida? | Texto Livre | Usado pela IA para o resumo. |
| `onset_type` | Como os sintomas começaram? | Opções: Gradual, Súbito | **Súbito** é alerta nível 3. |
| `symptom_progression` | Os sintomas estão piorando com o tempo? | Opções: Estável, Piorando, Oscilando | **Piorando** aumenta prioridade. |
| `symptom_duration` | Há quanto tempo os sinais foram notados? | Opções: < 6 meses, 6-12 meses, > 1 ano | Cronologia clínica. |

---

## 3. Bloco C: Domínios Cognitivos (Cognitive Domains)
*Objetivo: Avaliar áreas específicas da cognição.*

| Chave (QuestionKey) | Pergunta | Categoria | Tipo de Resposta |
| :--- | :--- | :--- | :--- |
| `memory_repetition` | A pessoa repete perguntas ou histórias com frequência? | Memória | Escala (Nunca a Frequentemente) |
| `memory_recall` | Esquece conversas recentes ou compromissos? | Memória | Escala |
| `memory_objects` | Perde objetos em locais incomuns com frequência? | Memória | Escala |
| `language_words` | Tem dificuldade para encontrar palavras ou trocar nomes? | Linguagem | Escala |
| `orientation_time` | Confunde o dia da semana, mês ou ano? | Orientação | Escala |
| `orientation_place` | Já se sentiu desorientado em locais conhecidos? | Orientação | Escala (Alerta se sim) |
| `executive_planning` | Dificuldade para planejar tarefas (ex: receitas, contas)? | Execução | Escala |

---

## 4. Bloco D: Impacto Funcional (Functional Impact)
*Objetivo: Avaliar a autonomia nas Atividades de Vida Diária (AVD).*

| Chave (QuestionKey) | Pergunta | Tipo de Resposta | Impacto |
| :--- | :--- | :--- | :--- |
| `func_finances` | Precisa de ajuda para gerenciar dinheiro ou pagar contas? | Sim/Não | Relevante |
| `func_medication` | Consegue tomar os medicamentos corretamente sozinho? | Sim/Não | Crítico |
| `func_shopping` | Consegue fazer compras de mercado ou farmácia sozinho? | Sim/Não | Relevante |
| `func_technology` | Dificuldade nova para usar celular ou banco digital? | Sim/Não | Precoce |

---

## 5. Bloco E: Fatores Confundidores (Confounding Factors)
*Objetivo: Identificar condições que mimetizam ou agravam declínio cognitivo.*

| Chave (QuestionKey) | Pergunta | Tipo de Resposta |
| :--- | :--- | :--- |
| `factor_sleep` | Possui problemas de sono (insônia, ronco excessivo)? | Sim/Não |
| `factor_mood` | Sente tristeza persistente ou falta de interesse em atividades? | Sim/Não |
| `factor_hearing` | Tem dificuldade para ouvir ou usa aparelho auditivo? | Sim/Não |
| `factor_vision` | Tem dificuldade visual que atrapalha as atividades? | Sim/Não |
| `factor_isolation` | Passa a maior parte do tempo sozinho ou com pouca interação? | Sim/Não |

---

## 6. Bloco F: Sinais de Segurança e Alerta Crítico (Safety)
*Objetivo: Identificar riscos imediatos.*

| Chave (QuestionKey) | Pergunta | Tipo de Resposta | Nível de Atenção |
| :--- | :--- | :--- | :--- |
| `safety_stove` | Já esqueceu o fogão ligado ou situações de risco em casa? | Sim/Não | Nível 3 |
| `safety_lost` | Já se perdeu fora de casa e precisou de ajuda para voltar? | Sim/Não | Nível 3 |
| `safety_hallucination` | Vê ou ouve coisas que outras pessoas não percebem? | Sim/Não | Nível 3 |
| `safety_aggression` | Apresentou episódios recentes de agressividade incomum? | Sim/Não | Nível 3 |

---

## Legenda de Respostas (Escala)
Para perguntas de frequência/escala, utilizaremos o padrão:
1. **Nunca** (0 pontos)
2. **Raramente** (1 ponto)
3. **Às vezes** (2 pontos)
4. **Frequentemente** (3 pontos)

---
*Este esquema deve ser revisado periodicamente conforme validação clínica simulada.*
