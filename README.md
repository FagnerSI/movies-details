# Projeto Nome

Este é um projeto React criado usando [Create React App](https://create-react-app.dev/). Ele serve como uma aplicação básica com estrutura inicial e dependências configuradas para desenvolvimento e construção.

## 📋 Índice

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Pré-requisitos](#pré-requisitos)
4. [Instalação](#instalação)
5. [Estrutura do Projeto](#estrutura-do-projeto)

## 📝 Sobre o Projeto

O projeto **movies-details** é uma aplicação web construída em React. Ele é desenvolvido para fornecer uma interface simples e eficiente para usuários visualizarem detalhes de um filme consumindo a API do [themoviedb.org](https://developer.themoviedb.org/reference/intro/getting-started).

## 🚀 Funcionalidades

- Visualizar detalhes de um filme.
- Favoritar um filme.
- Integração com API externa.

## 🛠 Pré-requisitos

Para executar o projeto localmente, você precisará das seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## 💻 Instalação

Siga os passos abaixo para rodar o projeto em sua máquina local:

1. Clone o repositório:

   ```bash
   git clone https://github.com/FagnerSI/movies-details.git

   ```

2. Entre no diretório do projeto:
   cd movies-details

3. Instale as dependências:
   npm install

4. Configuração de ambiente:
   No arquivo .env altere a variável REACT_APP_API_KEY para sua chave, fornecida em [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api/regenerate_confirm), REACT_APP_ACCOUNT_ID para sua id de cont e REACT_APP_AUTH_TOKEN para seu token de autenticação.

5. Inicie o servidor de desenvolvimento:
   npm start

📂 Estrutura do Projeto

/src
│
├── /assets # Arquivos estáticos (imagens, fontes, etc.)
│ ├── /images # Imagens
│
├── /components # Componentes reutilizáveis
│ ├── /Button # Exemplo de componente de botão
│ ├── Button.tsx
│ ├── Button.styles.ts
│ ├── index.ts
│ └── types.ts
│
├── /containers # Componentes mais complexos ou "smart components"
│ ├── /SearchPage # Exemplo de container para página inicial
│ │ ├── SearchPage.tsx
│ │ ├── SearchPage.scss
│ │ └── index.tsx
│
├── /services # Serviços e APIs externas
│ ├── api.ts # Arquivo de configuração da API
│ └── Search # Serviço de busca
│ └── index.ts
│ └── HttpClient # Client http
│ └── index.ts
|
├── /utils # Utilitários e funções auxiliares
│ ├── formatDate.ts # Exemplo de função de formatação de datas
│ └── mountLinkImage.ts # Exemplo de função de montagem de link de imagem
│
├── /styles # Estilos globais
│ ├── \_breakpoints.scss # Variáveis SASS de pontos de quebra por dispositivos
│ ├── \_variables.scss # Variáveis SASS
│ ├── \_breakpoints.scss # Variáveis de pontos de quebra por dispositivos
│ └── theme.ts # Estilos globais
│
├── /types # Tipos globais
│ ├── movie # Tipos de movies global
| | └── index.ts
| |
│ └── styles # Tipos de estilos globais
| └── index.ts
|
├── /pages # Páginas principais da aplicação
│ └── Search.tsx # Página principal
│
├── Root.tsx # Componente raiz que injeta o theme
├── App.tsx # Componente principal
├── index.tsx # Ponto de entrada do React
└── reportWebVitals.ts # Ferramenta de medição de desempenho (opcional)
