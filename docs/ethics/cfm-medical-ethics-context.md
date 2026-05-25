Knowledge base: Código de Ética Médica aplicado ao projeto neurocare-ai-lab

Fonte de referência:
Código de Ética Médica do Conselho Federal de Medicina — Resolução CFM nº 2.217/2018, modificada pelas Resoluções CFM nº 2.222/2018 e nº 2.226/2019.

Contexto de uso:
Esta base de conhecimento deve orientar decisões éticas, linguísticas, técnicas e de produto no repositório neurocare-ai-lab.

O projeto neurocare-ai-lab é um laboratório educacional de Engenharia de Software e IA Generativa aplicado à saúde digital. Ele NÃO é uma ferramenta médica, NÃO é um dispositivo médico, NÃO realiza diagnóstico e NÃO substitui avaliação profissional.

O MVP do projeto é o “Cognitive Report Generator for Consultation”, cujo objetivo é organizar respostas estruturadas de familiares/cuidadores sobre sinais cognitivos, funcionais, comportamentais e fatores confundidores, gerando um relatório não diagnóstico para apoiar uma conversa com profissional de saúde.

Princípios éticos relevantes para o projeto:

1. Respeito absoluto ao ser humano

O projeto deve preservar a dignidade, identidade, privacidade e integridade da pessoa avaliada.

Toda comunicação deve ser cuidadosa, não alarmista e não determinística.

O sistema nunca deve tratar a pessoa como “portadora provável” de doença.

O sistema nunca deve reduzir a pessoa a um score, risco ou suspeita diagnóstica.

2. Benefício ao paciente e à coletividade

Toda funcionalidade deve existir para apoiar cuidado responsável, orientação segura e melhor organização da informação.

O projeto não deve induzir medo, autodiagnóstico, automedicação ou decisões clínicas sem profissional.

O relatório deve ajudar familiares e profissionais a conversar melhor, não substituir a consulta.

3. Medicina não deve ser tratada como comércio

O projeto não deve usar linguagem comercial agressiva relacionada a diagnóstico, doença, cura, prevenção garantida ou detecção precoce.

Evitar promessas como:
- “descubra se você tem Alzheimer”
- “calcule seu risco”
- “diagnóstico com IA”
- “previsão de demência”
- “triagem clínica automatizada definitiva”

Preferir linguagem segura:
- “organização de sinais”
- “relatório não diagnóstico”
- “apoio à conversa com profissional”
- “sinais que merecem atenção”
- “informações para discussão em consulta”

4. Sigilo e privacidade

O projeto deve tratar informações de saúde como sensíveis.

Mesmo em ambiente de laboratório, usar apenas dados sintéticos.

Nunca utilizar dados reais de pacientes.

Evitar coletar dados identificáveis quando não forem necessários.

Priorizar minimização de dados, segurança, auditoria, controle de acesso e possibilidade de exclusão.

5. Autonomia e avaliação profissional

O sistema não deve tomar decisões clínicas.

O sistema não deve recomendar tratamentos.

O sistema não deve prescrever exames.

O sistema não deve afirmar que uma avaliação médica é desnecessária.

Sempre que houver sinais relevantes, orientar que o conteúdo seja discutido com profissional de saúde.

6. Responsabilidade profissional

O projeto deve reconhecer que diagnóstico, conduta, interpretação clínica e definição de exames pertencem a profissionais habilitados.

A IA generativa deve atuar somente como apoio textual para:
- resumir respostas
- organizar informações
- estruturar linha do tempo
- melhorar clareza do relatório
- sugerir perguntas para conversar com o profissional

A IA generativa nunca deve:
- diagnosticar
- inferir probabilidade de doença
- decidir prioridade clínica
- recomendar tratamento
- prescrever exame
- interpretar achados clínicos como confirmação de doença

7. Uso responsável de tecnologia

Como o Código de Ética Médica reconhece a importância do progresso científico e das novas tecnologias, este projeto deve usar IA com prudência, rastreabilidade e limites claros.

Toda saída da IA deve ser validada por guardrails.

Todo prompt deve ser versionado.

Toda regra determinística deve ser versionada.

Todo relatório gerado deve conter metadados de versão.

Toda decisão automatizada deve ser explicável.

8. Ensino, pesquisa e produção de conhecimento

O projeto deve ser tratado como laboratório educacional.

Toda documentação deve reforçar:
- finalidade acadêmica
- ausência de validação clínica
- ausência de uso assistencial real
- uso exclusivo de dados sintéticos
- necessidade de validação futura com profissionais e especialistas

O projeto pode servir como estudo técnico de:
- IA generativa
- Clean Architecture
- DDD
- guardrails
- auditoria
- observabilidade
- RAG
- human-in-the-loop
- privacidade by design
- Responsible AI

9. Linguagem proibida no projeto

Evitar completamente expressões como:
- “diagnóstico de Alzheimer”
- “diagnóstico de demência”
- “você tem Alzheimer”
- “risco alto de Alzheimer”
- “probabilidade de demência”
- “predição da doença”
- “resultado clínico”
- “faça este exame”
- “inicie tratamento”
- “não precisa procurar médico”
- “a IA identificou Alzheimer”
- “detecção precoce garantida”

10. Linguagem recomendada no projeto

Usar expressões como:
- “relatório não diagnóstico”
- “organização de sinais”
- “apoio à conversa com profissional de saúde”
- “sinais que merecem atenção”
- “prioridade de atenção”
- “avaliação profissional recomendada”
- “informações relatadas pelo familiar/cuidador”
- “este sistema não substitui avaliação médica”
- “discuta este relatório com um profissional de saúde”

11. Regras práticas para Jules ao trabalhar neste repositório

Sempre preservar o caráter educacional e não diagnóstico do projeto.

Nunca transformar o projeto em uma ferramenta médica real.

Nunca adicionar funcionalidades de diagnóstico, predição de Alzheimer ou cálculo de risco individual.

Nunca permitir que o LLM defina prioridade clínica.

Manter a prioridade de atenção em regras determinísticas.

Manter IA generativa apenas como apoio textual.

Adicionar guardrails para linguagem médica insegura.

Criar testes para bloquear outputs perigosos.

Criar documentação ética sempre que adicionar nova funcionalidade sensível.

Preferir soluções simples, explícitas, auditáveis e rastreáveis.

12. Disclaimer padrão recomendado

Este projeto é um laboratório educacional de Engenharia de Software e Inteligência Artificial aplicado à saúde digital.

Ele não realiza diagnóstico médico, não calcula risco individual de Alzheimer ou demência, não recomenda tratamentos, não prescreve exames e não substitui avaliação de profissionais de saúde.

As informações geradas são baseadas em dados sintéticos ou respostas simuladas e servem apenas para estudo técnico sobre IA responsável, arquitetura de software, geração de relatórios e organização de informações para uma conversa profissional.

Qualquer sinal de alteração cognitiva, funcional ou comportamental deve ser discutido com profissional de saúde qualificado.

13. Regra central do projeto

A IA não diagnostica.
A IA não decide.
A IA não prescreve.
A IA organiza informações com segurança, rastreabilidade e limites claros.
