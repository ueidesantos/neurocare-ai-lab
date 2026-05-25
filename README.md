# Clareza Cognitiva - neurocare-ai-lab

O **Clareza Cognitiva** é um laboratório educacional de IA Generativa e Engenharia de Software voltado para o desenvolvimento de uma plataforma de triagem cognitiva assistida por IA.

Este repositório faz parte de um estudo de pós-graduação em IA e tem como objetivo simular um ambiente de desenvolvimento de um MVP (Produto Mínimo Viável) seguro, ético e responsável para apoio à jornada clínica de declínio cognitivo.

---

## ⚠️ Posicionamento Responsável e Ético

Este projeto é **exclusivamente para fins educacionais**. Leia o nosso [Disclaimer e Posicionamento Ético](DISCLAIMER.md) completo.

O sistema **NUNCA**:
- Diagnostica Alzheimer, demência ou qualquer outra condição clínica.
- Calcula probabilidades individuais de doenças.
- Recomenda tratamentos ou prescreve exames.
- Substitui a avaliação de um profissional de saúde qualificado.

Para mais detalhes sobre nossas diretrizes e limites, leia o nosso [Disclaimer Educacional e Uso Responsável de IA](DISCLAIMER.md) e o nosso contexto de [Ética Médica e Prudência](docs/ethics/cfm-medical-ethics-context.md).

O sistema atua na **triagem e organização clínica**, ajudando a identificar sinais de alerta e a estruturar o histórico de sintomas para facilitar a conversa entre pacientes/familiares e profissionais de saúde.

---

## 💡 A Tese do Produto

Famílias percebem mudanças cognitivas, mas enfrentam atrasos no diagnóstico por não saberem diferenciar o envelhecimento normal de sinais iniciais de declínio. No Brasil, estima-se que cerca de 80% dos casos de demência não são diagnosticados.

**O Problema:** A jornada diagnóstica é caótica e desorganizada.
**A Solução:** Uma ferramenta que ajuda a organizar sinais de memória, comportamento e funcionalidade em um relatório útil para o médico.

---

## 👤 Personas

- **Mariana (Familiar Cuidador):** Percebe mudanças na mãe e precisa saber se deve procurar um médico e como organizar os relatos.
- **Roberto (Paciente):** Sente lapsos de memória e busca orientação cuidadosa sem alarmismo.
- **Dra. Ana (Profissional de Saúde):** Recebe relatos desorganizados e deseja um resumo clínico estruturado para otimizar a consulta.

---

## 🎯 Escopo do MVP

Consulte o [Escopo do MVP e Definição de Personas](docs/mvp-scope.md) para detalhes.

### O que o sistema faz:
- Coleta de consentimento e avisos de não diagnóstico conforme a [LGPD](docs/lgpd.md).
- Questionários estruturados para paciente e familiar.
- Identificação de **Sinais de Alerta** e **Fatores Confundidores** (ex: sono, humor) detalhados nos [Limites Clínicos](docs/clinical/limites-clinicos.md).
- Classificação determinística de prioridade (Níveis 0-3).
- Geração de **Relatório Clínico Estruturado** ([Modelo de Relatório](docs/clinical/modelo-relatorio.md)) para levar ao médico.
- Uso de IA Generativa apenas para resumir relatos e melhorar a comunicação.

### O que o sistema NÃO faz (Anti-escopo):
- Diagnóstico automático.
- Cálculo de score de risco de Alzheimer.
- Prescrição ou recomendação direta de medicação/exames.
- Decisões clínicas baseadas puramente em LLM (as regras de triagem são determinísticas).

---

## 🛠️ Tecnologia e Arquitetura

O projeto utiliza tecnologias modernas e padrões de engenharia de ponta:

- **Linguagem:** C# / .NET 10 (LTS).
- **Arquitetura:** Clean Architecture (Separação clara entre Domain, Application, Infrastructure e API).
- **IA Responsável:** Uso de **Fake AI** para desenvolvimento inicial, guardrails de saída para evitar linguagem diagnóstica e auditoria completa de prompts.
- **Dados e Segurança:** Foco em privacidade ([LGPD](docs/lgpd.md) by design), conformidade com [OWASP e Gartner](docs/security-risk-management.md) e uso de dados sintéticos para testes.

---

## 📈 Roadmap

1. **Fase 1:** Discovery e protótipo de relatório (Markdown).
2. **Fase 2:** Estruturação da Solution .NET 10 e Camadas de Domínio.
3. **Fase 3:** Implementação do motor de triagem determinístico.
4. **Fase 4:** Integração de IA com Guardrails e geração de PDF.
5. **Fase 5:** Validação clínica simulada.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---
*Desenvolvido como parte do neurocare-ai-lab para estudos de IA e Engenharia de Software.*
