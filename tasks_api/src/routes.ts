import { create } from "domain";
import { Router, Request, Response } from "express";

import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  finishTask,
  deleteTask,
} from "./controller/TasksController";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World :)" });
});

routes.get("/tasks", getTasks);
routes.post("/tasks", createTask);
routes.get("/tasks/:id", getTask);
routes.put("/tasks/:id", updateTask);
routes.patch("/tasks/:id", finishTask); //patch é utilizado quando só queremos alterar um registro no nosso banco
routes.delete("/tasks/:id", deleteTask);

export default routes;
