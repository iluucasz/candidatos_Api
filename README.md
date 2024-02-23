# Candidatos Api

## Frameworks e libs usadas:
```json
{
    "@prisma/client": "^5.9.1",
    "bcrypt": "^5.1.1",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "reflect-metadata": "^0.2.1",
    "tsyringe": "^4.8.0",
    "zod": "^3.22.4"
  },
```

## Como iniciar o servidor:

vincule seu banco de dados
```
crie o .env.develop e use o .env.example como modelo, alterando seus devidos valores
```

### instale o node no projeto
```javascript
npm install / npm i
```

### rode o prisma no projeto
```
npm run migrate:dev
```

### rodar o servidor:
```
npm run dev
```

### visualizar o banco de dados:
```
npm run studio:dev
```

# Documentação Completa e Testes de Rotas:

### Rota da documentação: GET /docs

## Rotas de Usuário

### Registrar usuário: POST /users

Padrão de Corpo:
```json
{
	"name": "john doe",
	"email": "john_doe@mail.com",
	"password": "12345678"
}
```

Padrão de Resposta (STATUS 201):
```json
{
	"id": 1,
	"name": "john doe",
	"email": "john_doe@mail.com"
}

```
Possíveis erros:

403 FORBIDDEN

```json
{
	"message": "E-mail already registered"s
}
```

### Logar usuário: POST /users/login

Padrão de Corpo:
```json
{
	"email": "john_doe@mail.com",
	"password": "12345678"
}
```

Padrão de Resposta (STATUS 200):
```json
{
	"AcessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI",
	"user": {
		"id": 1,
		"name": "john doe",
		"email": "john_doe@mail.com"
	}
}
```

### Obter usuários(necessário autorização): GET /users
Forneça o token do usuário correspondente:
```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
```

Padrão de Resposta (STATUS 200):
```json
{
	"id": 1,
	"name": "john doe",
	"email": "john_doe@mail.com"
}
```

## Rotas de Oportunidades

### Criar oportunidade(necessário autorização): POST /opportunities
Forneça o token do usuário correspondente:
```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
``` 

Padrão de corpo

```json
{
   "title": "Lorem ipsum",
   "description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 201)

```json
{
	"message": {
		"id": 1,
		"title": "Lorem ipsum",
		"description": "Lorem ipsum",
		"userId": 1
	}
}
```

### Obter oportunidade(rota pública): GET /opportunities

Padrão de resposta (STATUS 200)

```json
{
	"message":[
		{
			 "id": 1,
			 "title": "Lorem ipsum",
			 "description": "Lorem ipsum"
			 "userId": 1
	 }
	]
}
	
```

### Obter uma oportunidade do usuário(necessário autorização): GET /opportunities/:id
Forneça o token do usuário correspondente:
```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
``` 

Padrão de resposta (STATUS 200)

```json
{
	"message": [
		{
			"id": 1,
			"title": "Lorem ipsum",
      "description": "Lorem ipsum",
			"userId": 1
		},
	]
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

### Obter todas as oportunidade dos usuários(necessário autorização): GET /opportunities/user
Forneça o token do usuário correspondente:
```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
``` 

Padrão de resposta (STATUS 200)

```json
{
	"message": [
		{
			"id": 1,
			"title": "Lorem ipsum",
      "description": "Lorem ipsum",
			"userId": 1
		},
	]
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

### Atualizar oportunidade(necessário autorização): PATCH /opportunities/:id
Forneça o token do usuário correspondente:
```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
``` 

Padrão de corpo

```json
{
	"title": "Desenvolvedor Backend JR",
	"description": "Node Express, Prisma"
}
```

Padrão de resposta (STATUS 200)

```json
{
	"message": {
		"id": 1,
		"title": "Desenvolvedor Backend JR",
		"description": "Node Express, Prisma",
		"userId": 1
	}
}
```

### deletar oportunidade(necessário autorização): DELETE /opportunities/:id
Forneça o token do usuário correspondente:
```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
``` 

Nenhum corpo de resposta (STATUS 204)

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

## Rotas de Aplicação de oportunidade

### POST /opportunities/:id/applications

Padrão de corpo

```json
{
   "name": "john doe",
   "email": "john_doe@email.com",
   "linkedin": "https://example.com"
}
```

Padrão de resposta (STATUS 201)

```json
{
	"message": {
		"id": 1,
		"name": "john doe",
		"email": "john_doe@mail.com",
		"linkedin": "https://example.com",
		"opportunityId": 1
	}
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

### GET /opportunities/:id/applications
Forneça o token do usuário correspondente:
```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
``` 

Padrão de resposta (STATUS 200)

```json
{
	"message": [
		{
			"id": 1,
			"name": "john doe",
			"email": "john_doe@mail.com",
			"linkedin": "https://example.com",
			"opportunityId": 1
		}
	]
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```