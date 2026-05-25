# Escopo do MVP e Definição de Personas

O **Clareza Cognitiva** foca em reduzir o caos da jornada diagnóstica, ajudando famílias a organizar sinais cognitivos e funcionais para uma consulta médica mais produtiva.

## 🎯 Objetivos do MVP
- **Triagem:** Identificar se os relatos sugerem a necessidade de avaliação profissional.
- **Organização:** Gerar uma linha do tempo e um resumo estruturado dos sintomas.
- **Orientação:** Recomendar próximos passos e preparar o usuário para a consulta.

## 👤 Personas

### Mariana (Filha e Cuidadora)
- **Contexto:** Percebe mudanças na memória e comportamento da mãe de 72 anos.
- **Dor:** Incerteza se os sinais são "da idade" ou algo grave; dificuldade em explicar tudo ao médico em pouco tempo de consulta.
- **Job to be Done:** "Organizar os fatos que observei para saber se devo me preocupar e como ajudar o médico no diagnóstico."

### Roberto (Paciente)
- **Contexto:** Homem de 67 anos que sente lapsos de memória ocasionais.
- **Dor:** Ansiedade e medo de ter Alzheimer.
- **Job to be Done:** "Saber se meus esquecimentos justificam uma avaliação sem entrar em pânico prematuro."

### Dra. Ana (Médica Especialista)
- **Contexto:** Neurologista ou Geriatra que recebe familiares com relatos desorganizados.
- **Dor:** Perda de tempo clínico tentando reconstruir a linha do tempo e o impacto funcional.
- **Job to be Done:** "Ter acesso a um resumo clínico objetivo e estruturado antes de iniciar a anamnese presencial."

## 🛠️ Funcionalidades do MVP (Escopo)
1. **Fluxo de Triagem:** Questionários adaptados para paciente ou familiar.
2. **Consentimento LGPD:** Coleta formal de aceite para tratamento de dados sensíveis.
3. **Identificação de Sinais de Alerta:** Verificação de riscos de segurança e piora súbita.
4. **Resumo Narrativo por IA:** Transformação de respostas livres em texto clínico estruturado.
5. **Classificação Determinística:** Níveis de prioridade de 0 a 3 baseados em regras C#.
6. **Relatório em PDF:** Documento pronto para ser levado à consulta.

## 🚫 Anti-escopo (O que NÃO faremos)
- Diagnóstico automático de patologias.
- Cálculo de probabilidade individual de Alzheimer.
- Prescrição de medicamentos ou exames.
- Recomendações baseadas puramente em decisão de IA (sem regras determinísticas).
