# 🛒 Sistema de Cadastro de Produtos

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)

</div>

Sistema full stack para cadastrar, listar e remover produtos com uma API REST em Node.js + Express e uma interface moderna em React + Vite.

## 📌 Visão geral

Esse projeto foi desenvolvido para funcionar como base de portfólio e como aplicação prática de integração entre frontend e backend. Ele permite:

- cadastrar produtos com nome, preço e quantidade;
- listar todos os produtos cadastrados;
- remover itens da base em memória;
- verificar o funcionamento da API no terminal.

## 🧩 Tecnologias utilizadas

- Node.js
- Express
- CORS
- React
- Vite
- JavaScript

## 📁 Estrutura do projeto

```text
projetoprodutos-fullstack/
├── api-produtos/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── app-produtos/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── README.md
├── .gitignore
├── .gitattributes
├── README.md
└── package-lock.json
```

## ✨ Funcionalidades

- Cadastro de produtos com nome, preço e quantidade
- Listagem de todos os itens cadastrados
- Exclusão de produtos do sistema
- Logs no terminal para confirmação da execução da API

## ✅ Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js
- npm

## 🚀 Como executar

### 1) Backend

No terminal, execute:

```bash
cd api-produtos
npm install
npm run dev
```

A API ficará disponível em:

```text
http://localhost:3001
```

### 2) Frontend

Abra outro terminal e execute:

```bash
cd app-produtos
npm install
npm run dev
```

A interface ficará disponível em:

```text
http://localhost:5173
```

## 🧪 Teste da API

Você pode validar diretamente no terminal com os comandos abaixo:

```bash
curl http://localhost:3001/produtos
curl -X POST http://localhost:3001/produtos -H "Content-Type: application/json" -d '{"nome":"Teclado","preco":120,"quantidade":3}'
```

A resposta deve retornar JSON com os dados cadastrados e a API exibirá logs no terminal.

## 📸 Preview

A interface permite cadastrar produtos e visualizar a lista em tempo real:

```text
Tela de cadastro de produtos
┌──────────────────────────────────────┐
│ Nome:                                │
│ Preço:                               │
│ Quantidade:                          │
│ [Cadastrar]                          │
│                                      │
│ Lista de produtos:                   │
│ - Mouse Gamer - R$ 149,90 (12 un.)   │
│ - Teclado - R$ 120,00 (3 un.)        │
└──────────────────────────────────────┘
```


