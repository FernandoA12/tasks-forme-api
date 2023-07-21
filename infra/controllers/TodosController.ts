import { AddTodo } from "application/usecases/AddTodo";
import { TodosRepositoryMemory } from "infra/repositories/TodosRepositoryMemory";
import { CryptoIdentifier } from "infra/security/CryptoIdentifier";

const todosRepository = new TodosRepositoryMemory();
export class TodosController {
  static async create(_, body) {
    const identifier = new CryptoIdentifier();
    const addTodo = new AddTodo(todosRepository, identifier);

    await addTodo.execute({
      description: body.description,
      score: body.score,
    });
  }
}
