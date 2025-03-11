# Automacao de Testes - Blog do AGI

## 📌 Descrição
Este projeto tem como objetivo a automação de testes da funcionalidade de pesquisa de artigos no [Blog do AGI](https://blogdoagi.com.br/). Utilizando Cypress, os testes validam o comportamento esperado da busca de artigos no site.

## 🚀 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework para testes end-to-end
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript

## 📂 Estrutura do Projeto
```
📁 teste-blog_agi-2025
├── 📁 cypress
│   ├── 📁 e2e  # Testes automatizados
│   ├── 📁 support  # Custom commands do Cypress
├── 📄 cypress.config.js  # Configuração do Cypress
├── 📄 package.json  # Dependências do projeto
├── 📄 README.md  # Documentação do projeto
```

## 📥 Instalação do projeto
Siga os passos abaixo para configurar e executar o projeto localmente.

### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/LeandroStevanatoAlves/teste-blog-agi-2025/
cd teste-blog_agi-2025
```

### 2️⃣ Instalar o Node.js (se ainda não estiver instalado)
Baixe e instale a versão mais recente do [Node.js](https://nodejs.org/).

### 3️⃣ Instalar as dependências do projeto
```sh
npm install
```

## ▶️ Executando os Testes

Para executar os testes com interface gráfica:
```sh
npx cypress open
```

Para executar os testes sem interface gráfica:
```sh
npx cypress run
```

## 🎯 Cenários de teste
### 1️⃣ **Pesquisa válida**: Verifica se a pesquisa retorna artigos relacionados a palavra-chave pesquisada.
### 2️⃣ **Pesquisa inválida**: Verifica o comportamento quando uma palavra-chave não retorna nenhum artigo.
### 3️⃣ **Pesquisa vazia**: Testa o comportamento do sistema ao realizar uma busca sem informar uma palavra-chave.

## 🛠️ CI/CD
O projeto pode ser configurado para rodar testes automaticamente em pipelines como GitHub Actions ou Jenkins.

## 📜 Observação
Tive problemas de instabilidade para abrir o menu de pesquisa, algumas vezes funcionava e algumas vezes não funcionava. Para contornar o problema utilizei o force: true, para melhorar a confiabilidade dos testes. Sei que não é uma boa prática utilizar, num projeto real gastaria mais tempo investigando o problema.
