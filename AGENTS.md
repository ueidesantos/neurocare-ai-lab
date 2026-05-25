# AGENTS.md - Diretrizes para Agentes de IA

Este arquivo contém instruções e restrições obrigatórias para qualquer agente de IA que atue neste repositório. O **neurocare-ai-lab** é um projeto de IA Responsável e deve seguir padrões rigorosos.

## 🔴 Restrições Éticas Inegociáveis (Safety Guardrails)

1. **NUNCA Diagnosticar:** O sistema não deve nunca emitir frases como "Você tem Alzheimer" ou "A probabilidade é de X%".
2. **NUNCA Prescrever:** Não sugira medicamentos ou exames específicos como uma ordem. Use sempre "Converse com seu médico sobre...".
3. **Tom de Voz:** Deve ser acolhedor, profissional e cauteloso. Evite alarmismo.
4. **Foco na Triagem:** O objetivo é organizar dados para um humano (médico) decidir.

## 🏗️ Diretrizes de Engenharia e Código

1. **Clean Architecture:** Siga estritamente a separação de camadas.
   - **Domain:** Lógica de negócio pura, sem dependências externas.
   - **Application:** Casos de uso e orquestração.
   - **Infrastructure:** Implementações de acesso a dados, integração com LLMs, geração de PDFs.
   - **API:** Interface de entrada (WebAPI).
2. **Idioma:**
   - **Código:** Nomes de classes, variáveis, métodos e propriedades devem ser sempre em **Inglês**.
   - **Mensagens ao Usuário:** Devem ser em **Português**.
   - **Documentação:** READMEs e arquivos de doc devem ser em **Português**.
3. **Tecnologia:** Use .NET 10 (LTS).
4. **Triagem Determinística:** As regras de decisão clínica (quem deve procurar médico e com qual prioridade) devem ser implementadas em **código C# determinístico** (regras if/else/switch ou patterns de engine), **NUNCA** deixando a decisão final de prioridade apenas para o LLM.
5. **IA Generativa:**
   - Use o padrão de **Fake AI** para testes e desenvolvimento inicial.
   - Isole o acesso a LLMs atrás de interfaces na camada de Application, com implementações na Infrastructure.
   - Sempre implemente **Guardrails** de saída para filtrar termos proibidos.

## 🔍 Verificações Obrigatórias

- Antes de qualquer commit que altere lógica de triagem, verifique se as regras determinísticas estão cobertas por testes unitários.
- Garanta que mensagens geradas para o relatório contenham o disclaimer de "Não diagnóstico".
- Observe rigorosamente as diretrizes éticas em `docs/ethics/cfm-medical-ethics-context.md`.

---
*Este arquivo é a "consciência" do projeto para agentes automatizados.*
