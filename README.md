# Projeto Blog API



## Descrição

Este projeto consiste no desenvolvimento de uma API e um banco de dados para a produção de conteúdo para um blog. A aplicação foi desenvolvida em Node.js usando o pacote Sequelize para fazer um CRUD de posts. Além disso, a API segue os princípios do REST e trabalha a relação entre usuário e post, além de utilizar categorias para os posts.

### Hugo de Sousa Silva
linkedin: https://www.linkedin.com/in/hugo-de-sousa-dev/
<br>

## Funcionalidades

- CRUD de posts
- Cadastro e login de usuários
- Relação entre usuário e post
- Utilização de categorias para os posts

<br>

## Tecnologias

- Node.js
- Sequelize
- MySQL
- JWT

<br>

## Instalação

- Clone este repositório em sua máquina
- Rode os serviços **node e db** com o comando `docker-compose up -d --build`. Esses serviços irão inicializar um container chamado **blogs_api** e outro chamado **blogs_api_db**.
- Use o comando `docker exec -it blogs_api bash` para acessar o terminal interativo do container.
- Instale as dependências com o comando `npm install` dentro do container.
- Rode os comandos `npm run prestart` e `npm run seed` para criar o banco de dados, executar as migrações e popular a tabela.
- Inicie o servidor com o comando `npm start`.

<br>

> Está disponível um arquivo `thunder-collection_Blog-API.json` que pode ser importado na extensão do **VSCode Thunder Client** para testar as rotas da API.
> 

<br>

## Endpoints

### Usuários

- `POST /users` - cria um novo usuário
- `POST /login` - realiza o login de um usuário e retorna um token JWT
- `GET /user`- retorna todos os usuários cadastrado
- `GET /user/:id` - retorna um usuários pelo id

### Posts

- `GET /posts` - retorna todos os posts cadastrados
- `POST /posts` - cria um novo post
- `GET /posts/:id` - retorna o post com o id especificado (ainda não implementado ….)
- `PUT /posts/:id` - atualiza o post com o id especificado (ainda não implementado ….)
- `DELETE /posts/:id` - deleta o post com o id especificado (ainda não implementado ….)

### Categorias

- `POST /categories` - cria uma nova categoria
- `GET /categories`- retorna todos as categorias cadastradas

<br>

### Projeto base fornecido pela Trybe
https://www.betrybe.com/
