Aqui está um exemplo de README para o seu projeto de F1:

---

# F1 Teams and Drivers API

## Descrição

Este projeto é uma API simples construída com [Fastify](https://www.fastify.io/), que fornece informações sobre as equipes e pilotos da Fórmula 1. A API permite que você consulte todas as equipes e pilotos, bem como detalhes específicos de cada piloto.

## Endpoints

### 1. Listar todas as equipes

**GET** `/teams`

**Resposta:**

```json
{
    "teams": [
        {"id": 1, "name": "Ferrari", "base": "Maranello, Itália"},
        {"id": 2, "name": "Mercedes", "base": "Brackley, Reino Unido"},
        ...
    ]
}
```

### 2. Listar todos os pilotos

**GET** `/drivers`

**Resposta:**

```json
{
    "drivers": [
        {"id": 1, "name": "Charles Leclerc", "team": "Ferrari"},
        {"id": 2, "name": "Lance Stroll", "team": "Aston Martin"},
        ...
    ]
}
```

### 3. Detalhes de um piloto específico

**GET** `/drivers/:id`


## Como rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor:**

   ```bash
   npm run dev
   ```

4. **Acesse a API:**

   O servidor estará rodando em `http://localhost:3333`.

## Dependências

- [Fastify](https://www.fastify.io/)
- [@fastify/cors](https://github.com/fastify/fastify-cors)
