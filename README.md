# neurocare-ai-lab

Este repositório é um laboratório educacional de **IA Generativa e Engenharia de Software**, desenvolvido como parte de estudos de pós-graduação em IA. O foco é a criação de um MVP (Mínimo Produto Viável) chamado **"Gerador de Relatórios Cognitivos para Consulta"**.

---

## ⚠️ Isenção de Responsabilidade (Responsible AI)

Este projeto deve ser tratado **exclusivamente como um laboratório de aprendizado de IA Responsável**, e **NUNCA** como um produto médico, ferramenta de diagnóstico ou solução comercial de healthtech.

*   **Não Diagnostica:** O sistema nunca diagnostica Alzheimer, demência ou qualquer outra condição.
*   **Não Calcula Probabilidade:** Não fornece probabilidades individuais de doenças.
*   **Não Recomenda Tratamento:** Não prescreve exames ou tratamentos.
*   **Não Substitui Médicos:** O objetivo é apenas organizar informações para facilitar a conversa entre familiares/cuidadores e profissionais de saúde qualificados.

---

## 🎯 Objetivos do Projeto

O sistema coleta respostas estruturadas de cuidadores ou familiares sobre:
- Memória e Comportamento.
- Funcionalidade no dia a dia.
- Fatores de confusão (ex: sono, medicamentos, humor).

O objetivo final é gerar um relatório não diagnóstico que organiza essas observações para serem levadas a uma consulta médica.

---

## 🏗️ Arquitetura e Princípios

O projeto segue os princípios de **Clean Architecture** e **IA Responsável**:

### Engenharia de Software
- **Linguagem/Plataforma:** C# / .NET 10.
- **Camadas:** Separação clara entre `Domain`, `Application`, `Infrastructure`, `API`, `Tests` e `Docs`.
- **Abstração de LLM:** Integração com modelos de linguagem via abstrações (interfaces), permitindo a troca de provedores ou o uso de simuladores.

### IA Responsável
- **Triagem Determinística:** As decisões de prioridade de atenção são baseadas em **regras determinísticas (código)**, nunca em respostas do LLM.
- **LLM para Comunicação:** A IA Generativa é utilizada apenas para sumarizar, organizar e melhorar a clareza da comunicação no relatório.
- **Fake AI First:** Uso de mocks/simuladores de IA antes de integrar com provedores reais.
- **Dados Sintéticos:** O repositório utiliza apenas dados sintéticos para testes e demonstrações.
- **Versionamento:** Prompts, regras de negócio e questionários são versionados de forma independente.
- **Guardrails e Observabilidade:** Implementação de travas de segurança (guardrails), trilha de auditoria e testes para detectar saídas inseguras ou inadequadas.

---

## 🚀 Como Executar (Em desenvolvimento)

O projeto está estruturado em .NET 10. Para rodar localmente:

```bash
# Restaurar dependências
dotnet restore

# Compilar o projeto
dotnet build

# Executar testes
dotnet test
```

---

## 📜 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
