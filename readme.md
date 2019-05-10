## API do Adapta v2

* **Linguagem de Programação:** JS com NodeJS
* **BD NoSQL:** MongoDB
* **Lint:** Standard
* **Testes BDD:** [Unitário, INtegração, Cobertura e UI]
* **Hospedagem atual:** Uol Openstack

## Tecnologias utilizadas:
* API: NodeJS + Express + Mongoose + outros pacotes NPM
* Testes: Mocha + Chai + NYC + DoubleTest + supertest + etc
* Monitoramento: -- Desejável New Relic --

## Rodar na primeira vez
* npm i
* Dev: npm run dev
* Prod: npm start

## Testes
* npm run test-unit
* npm run test-integration

## Endpoints
Base URL: http://api.adaptav2.savaestacio.com.br/api

### Filtros padrões
Para todos os endpoints é possível passar parâmetros de filtro via query string, são eles:

| Filtro | Exemplo
| --- | ---
| `campos` | ?campos=nome,email
| `paginacao` | ?pagina=2&quantidade=40
| `quantidade` | ?quantidade=50
| `ordem` | ?ordem=-nome

### Alunos

| Método | Endpoint | Uso | Retorno | body
| --- | --- | --- | --- | --- |
| `GET` | /aluno | Retorna alunos | alunos | -
| `GET` | /aluno/:id | Retorna um aluno | aluno | -
| `PUT` | /aluno/:id | Atualiza dados de um aluno | aluno | { aluno }
| `DELETE` | /aluno/:id | Exclui aluno | aluno | -
| `POST` | /aluno/login | Autentica aluno | aluno | { email, senha }
| `GET` | /aluno/me | Retorna dados do aluno autenticado | aluno | -
| `POST` | /aluno/disciplinas | Obtem disciplinas do aluno autenticado | disciplinas | -

**Filtros `GET` /aluno**

| Filtro | Exemplo | Descrição
| --- | --- | --
| nome | `?nome={Nome do aluno}` | Nome do aluno
| matricula | `?matricula={matricula do aluno}` | Matrícula do aluno
| períodos acadêmicos | `?periodos=103297,103287` | ex: `[103297,103287]`
