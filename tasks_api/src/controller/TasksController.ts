import { getRepository } from "typeorm"; //pega a entidade task e seta os métodos create, update, delete, find...
import { Tasks } from "../entity/Tasks";
import { Request, Response } from "express";

//export porque todos esses métodos vão ser chamados no arquivo routes
export const getTasks = async (request: Request, response: Response) => {
  const tasks = await getRepository(Tasks).find();

  tasks.sort((a, b) => a.id - b.id);

  return response.json(tasks);
};

export const createTask = async (request: Request, response: Response) => {
  const task = await getRepository(Tasks).save(request.body);
  return response.json({
    messagem: "A task foi criada",
    task,
  });
};

export const getTask = async (request: Request, response: Response) => {
  const { id } = request.params;

  const task = await getRepository(Tasks).findOne(id);

  return response.json(task);
};

export const updateTask = async (request: Request, response: Response) => {
  const { id } = request.params;

  const update = await getRepository(Tasks).update(id, request.body);

  if (update.affected) {
    const task = await getRepository(Tasks).findOne(id);
    return response.json(task);
  }

  return response.status(404).json({
    messagem: "sinto muito, não há task com esse id",
  });
};

export const finishTask = async (request: Request, response: Response) => {
  const { id } = request.params;

  const update = await getRepository(Tasks).update(id, { finished: true });

  if (!update.affected) {
    const task = await getRepository(Tasks).findOne(id);

    if (!task) {
      return response.json("essa task não existe!");
    }
    if (task.finished) {
      return response.json("essa task já está finalizada");
    }
  }

  const task = await getRepository(Tasks).findOne(id);

  return response.json({ messagem: "Task atulizada", task });
};

export const deleteTask = async (request: Request, response: Response) => {
  const { id } = request.params;

  const task = await getRepository(Tasks).findOne(id);

  if (!task) {
    return response.json("task não existe");
  }

  const del = await getRepository(Tasks).delete(id);

  return response.json({ messagem: "Task deletada", task: task.title });
};
