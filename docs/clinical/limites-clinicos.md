# Limites Clínicos e Motor de Triagem

Este documento define as regras de negócio para a triagem de sinais de declínio cognitivo, garantindo uma abordagem determinística e segura.

## 1. Classificação de Prioridade (Níveis 0-3)

O motor de triagem (Triage Engine) deve utilizar regras C# puras para definir o nível de atenção, sem depender da interpretação subjetiva de um LLM para a classificação final.

| Nível | Classificação | Critérios Iniciais (Exemplos) |
| :--- | :--- | :--- |
| **0** | **Sem Alerta Evidente** | Queixas subjetivas leves, sem impacto funcional e sem sinais de segurança. |
| **1** | **Atenção** | Sintomas recorrentes, mas sem comprometimento claro das Atividades de Vida Diária (AVDs). |
| **2** | **Avaliação Recomendada** | Presença de declínio progressivo com impacto leve/moderado em AVDs (ex: finanças, remédios). |
| **3** | **Avaliação Prioritária** | Sinais de alerta graves, risco de segurança, mudança súbita de comportamento ou confusão severa. |

## 2. Domínios Cognitivos Monitorados
- Memória (Recente, Retenção, Evocação).
- Linguagem (Fluidez, Nomeação).
- Orientação (Tempo, Espaço).
- Atenção e Funções Executivas (Planejamento, Julgamento).

## 3. Fatores Confundidores
O sistema deve identificar e reportar fatores que podem mimetizar ou agravar o declínio cognitivo, alertando o médico para investigação:
- Problemas de Sono (Insônia, Apneia).
- Humor e Saúde Mental (Depressão, Ansiedade, Luto).
- Condições Sensoriais (Audição, Visão).
- Medicamentos em uso.
- Infecções recentes.

## 4. Sinais de Alerta (Red Flags)
A presença de qualquer um destes sinais eleva automaticamente a prioridade para o Nível 3:
- Esquecer o fogão ligado ou riscos de incêndio.
- Perder-se em locais conhecidos.
- Erros graves na administração de medicamentos.
- Prejuízos financeiros por falta de julgamento.
- Alucinações ou agressividade súbita.

## 5. Diretrizes para Resumos de IA
- **Tom:** Profissional e cauteloso.
- **Guardrails:** Bloqueio de termos como "provável Alzheimer", "diagnóstico de demência", "cura", ou prescrições diretas.
- **Disclaimer Obrigatório:** Todo resumo deve vir acompanhado do aviso de que não constitui diagnóstico.

---
*A decisão clínica final cabe sempre ao profissional de saúde habilitado.*
