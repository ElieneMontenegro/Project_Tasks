# Studying_TypeORM

- install typeorm globally
  sudo yarn global add typeorm

- create project
  typeorm init --name tasks_api --database postgres --express

- inside ormconfig you setup your database

- install all dependencies
  yarn install

Começando o projeto:

- Routes
  yarn add @types/express -D

- index
  faz as configurações gerais do projeto

- instalar o nodemoon para não ter que ficar restartando o servidor
  yarn add nodemon -D

  cria um arquivo nodemon.json dentro da pasta do projeto e coloca as configs.

- cria dentro de Entity suas tabelas
  terminando a criação da tabela, vá em index e estabeleça conexão com o createConnection do typeorm

- rode o banco para estabelecer conexão
  se tudo estiver dando errado kkkk apague o banco, rode sudo pkill postgres
  rode docker run --name db_tasks -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

- crie o controller

- Em routes, passe a rota dos seus controllers
  exemplo `routes.get("/tasks", getTasks);`
