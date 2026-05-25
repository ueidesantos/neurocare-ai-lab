# Governança de Dados e LGPD

O projeto **Clareza Cognitiva** trata dados pessoais sensíveis (saúde) e, por isso, adota os princípios da **Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)** como base fundamental de sua arquitetura.

## 1. Tratamento de Dados Pessoais Sensíveis
De acordo com a LGPD e as diretrizes do Ministério da Saúde, dados de saúde exigem proteções adicionais.
- **Finalidade:** Os dados são coletados exclusivamente para a realização da triagem cognitiva e geração do relatório estruturado.
- **Minimização:** Coletamos apenas as informações estritamente necessárias para a finalidade descrita (ex: idade, escolaridade e relatos de sintomas).
- **Dados Sintéticos:** Para fins de desenvolvimento e testes no laboratório, utilizamos exclusivamente dados sintéticos.

## 2. Direitos do Titular
O sistema é projetado para garantir que o titular dos dados (ou seu representante legal) possa exercer seus direitos:
- **Confirmação e Acesso:** O usuário pode visualizar todas as respostas fornecidas antes da geração do relatório.
- **Correção:** Possibilidade de editar informações durante o fluxo de preenchimento.
- **Eliminação:** Funcionalidade de exclusão total dos dados da sessão após a geração do relatório.
- **Revogação do Consentimento:** O fluxo pode ser interrompido a qualquer momento, resultando na exclusão imediata dos dados coletados até então.

## 3. LGPD by Design
Nossa arquitetura implementa a proteção de dados desde a concepção:
- **Consentimento Explícito:** Coleta de aceite destacado antes do início de qualquer questionário.
- **Segurança da Informação:** Criptografia em trânsito e repouso (em implementações futuras de persistência).
- **Auditoria:** Registro de logs de consentimento e versões das regras de triagem aplicadas.
- **Transparência:** Explicação clara de como a IA é utilizada e quais são seus limites.

## 4. Agentes de Tratamento
No contexto deste laboratório acadêmico:
- **Controlador:** O próprio laboratório neurocare-ai-lab, definindo as finalidades do tratamento.
- **Operador:** Serviços de infraestrutura e provedores de LLM (utilizados sob contratos de privacidade rigorosos).

---
*Este documento é parte da estratégia de transparência e responsabilidade do neurocare-ai-lab.*
