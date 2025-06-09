# 🔐 Crypto API

API simples para criptografia e descriptografia de textos, construída com **TypeScript** e **Fastify**. Possui duas rotas principais para criptografar e descriptografar textos, com documentação via **Swagger**, logs estruturados com **Pino** e banco de dados PostgreSQL executado via **Docker**.

---

## ⚙️ Tecnologias

- 🟦 **TypeScript** — Tipagem estática para maior segurança e produtividade.
- ⚡ **Fastify** — Framework web ultrarrápido para Node.js.
- 📜 **Swagger (OpenAPI)** — Documentação automática da API.
- 🔐 **Criptografia** — Implementação customizada para encrypt/decrypt.
- 🐘 **PostgreSQL** — Banco relacional usado para persistência.
- 🐳 **Docker** — Container para executar banco de dados de forma isolada.
- 🔍 **Vitest** — Testes unitários e mocks eficientes.
- 📋 **Pino** — Logs estruturados de alta performance.
- 🧩 **Zod** — Validação e parsing de schemas para dados.

---

## 🚀 Funcionalidades

- **POST /encrypt** — Recebe texto e retorna texto criptografado, key e iv.
- **POST /decrypt** — Recebe texto criptografado, key e iv e retorna texto descriptografado.

---

## 🛠️ Requisitos

Antes de rodar o projeto, tenha instalado:

- **Docker** (para banco de dadose e aplicação)
- **Node.js** (v22+)
- **npm** (gerenciador de pacotes)

Links:

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/)

---

## 📦 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/crypto-api.git
```

2. Entre na pasta do projeto:

```bash
cd crypto-api
```

3. Criando o arquivo `.env`
Copie o arquivo `.env.example` para um novo arquivo `.env` na raiz do projeto, mantendo as mesmas configurações iniciais:

```bash
cp .env.example .env
```

5. Execute o projeto diretamente:

```bash
npm install
npm run dev
```

6. Execute o projeto com docker:

```bash
docker compose up -d
```