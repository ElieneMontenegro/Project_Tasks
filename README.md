# Project_Tasks

## Studying_TypeORM

- install typeorm globally
  sudo yarn global add typeorm

- create project
  typeorm init --name tasks_api --database postgres --express

- inside ormconfig you setup your database

- install all dependencies
  yarn install

Começando o projeto:

- Routes
  `yarn add @types/express -D`

- index
  faz as configurações gerais do projeto

- instalar o nodemoon para não ter que ficar restartando o servidor
  `yarn add nodemon -D`

  cria um arquivo nodemon.json dentro da pasta do projeto e coloca as configs.

- cria dentro de Entity suas tabelas
  terminando a criação da tabela, vá em index e estabeleça conexão com o createConnection do typeorm

- rode o banco para estabelecer conexão
  se tudo estiver dando errado kkkk apague o banco, rode sudo pkill postgres
  rode `docker run --name db_tasks -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres`

- crie o controller

- Em routes, passe a rota dos seus controllers
  exemplo `routes.get("/tasks", getTasks);`

## Studying_React

- iniciar projeto com react
  `create-react-app tasks_frontend --template=typescript`

- instalar dependências 
  `yarn add react-bootstrap bootstrap axios react-router-dom`
  `yarn add @types/react-router-dom -D`

- em src apaga tudo menos:
  - app.tsx
  - index.tsx
  - react-app-env.d.ts

- cria a pasta services para consumir a api

- cria routes e pastas de pages

- problema com chokidar: 
    - insert the new value into the system config
    `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

    - check that the new value was applied
    `cat /proc/sys/fs/inotify/max_user_watches`

    - config variable name (not runnable)
    fs.inotify.max_user_watches=524288

- react-bootstrap ->
  https://react-bootstrap.github.io/


