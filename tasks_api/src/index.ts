import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
import { createConnection } from "typeorm";

const app = express(); //app utiliza tudo que o express pode fazer

createConnection(); //criando conexão com o banco de dados

app.use(bodyParser.json());
//falando para minha aplicação que os dados enviados pelo request serão em formato json

app.use(routes);
//adicionar rotas na aplicação

app.listen(3333);
//a aplicação vai rodar nesta porta na web
//go to localhost:3333
