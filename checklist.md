# ✅ Checklist Profissional — Sistema de Criptografia AES-256-CTR

## 📦 Setup Inicial
- [x] Inicializei projeto Node.js + TypeScript  
- [x] Instalei e configurei Express  
- [x] Estruturei o projeto com camadas (controller/use-case/provider)  
- [x] Configurei ESLint + Prettier (opcional mas recomendado)  

---

## 🔐 Funcionalidade: Criptografar
- [x] Criei o endpoint `POST /encrypt`  
- [x] Criei o `EncryptController` com validação usando Zod  
- [x] Criei o `EncryptUseCase` com regra de negócio isolada  
- [x] Criei o `CryptoProvider` com método `encrypt()`  
- [x] Usei a factory `make-encrypt-factory` para injeção de dependência  
- [x] Validei se `content` foi enviado e não está vazio  

---

## 🔓 Funcionalidade: Descriptografar
- [x] Criei o endpoint `POST /decrypt`  
- [x] Criei o `DecryptController` com validação usando Zod  
- [x] Criei o `DecryptUseCase` com regra de negócio isolada  
- [x] Usei `CryptoProvider.decrypt()` com chave e IV  
- [x] Tratei erros para chaves ou IVs inválidos  

---

## 🧪 Testes
- [x] Instalei e configurei Jest + Supertest  
- [x] Criei teste de integração para `POST /encrypt`  
- [x] Criei teste de integração para `POST /decrypt`  
- [x] Criei testes unitários para `EncryptUseCase` e `DecryptUseCase`  
- [x] Validei resposta com dados inválidos (400 Bad Request)  

---

## 📁 Arquitetura SOLID
- [x] Separei responsabilidades por camada (SRP)  
- [x] Usei interfaces (`ICryptoProvider`) para abstração  
- [x] Use-cases não sabem nada do Express (isolamento total)  
- [x] Controllers apenas tratam req/res  
- [x] Factories injetam as dependências corretamente  

---

## 🧩 Extras Profissionais
- [ ] Adicionei logs usando `winston` ou `pino`  
- [ ] Documentei a API com Swagger  
- [ ] Adicionei middleware de erro global  
- [ ] Validei entradas com Zod ou class-validator em todos endpoints  

---

## 🛢 Banco de Dados (Opcional)
- [ ] Criei o modelo `EncryptionLog` no Prisma  
- [ ] Implementei gravação de logs de criptografia  
- [ ] Adicionei flag `.env` para ativar/desativar logging  
- [ ] Nunca salvo `content` puro no banco (segurança!)  

---

## 🚀 Deploy & Entrega (se necessário)
- [ ] Criei `Dockerfile` e `.dockerignore`  
- [ ] Fiz deploy no Render / Vercel / EC2  
- [ ] Documentei no `README.md` como rodar localmente  
- [ ] Adicionei cobertura de testes (`jest --coverage`)  

---

## 📚 Apresentação
- [ ] Escrevi README com:
  - [ ] Introdução do projeto
  - [ ] Instruções de instalação e execução
  - [ ] Endpoints da API
  - [ ] Como rodar os testes
  - [ ] Estrutura do projeto explicada