import { AddTodo } from "application/usecases/AddTodo";
import { RemoveTodo } from "application/usecases/RemoveTodo";
import { TodoPresentation } from "infra/presentation/TodoPresentation";
import { TodosRepositoryBridge } from "infra/repositories/bridge/TodosRepositoryBrigde";
import { TodosRepositoryDatabase } from "infra/repositories/database/TodosRepositoryDatabase";
import { TodosRepositoryMemory } from "infra/repositories/memory/TodosRepositoryMemory";
import { CryptoIdentifier } from "infra/security/CryptoIdentifier";

const todosRepositoryBridge = new TodosRepositoryBridge(
  new TodosRepositoryMemory(),
  new TodosRepositoryDatabase()
);
export class TodosController {
  static async create(_, body) {
    const identifier = new CryptoIdentifier();
    const addTodo = new AddTodo(todosRepositoryBridge, identifier);

    await addTodo.execute({
      description: body.description,
      score: body.score,
    });
  }

  static async list() {
    const result = await todosRepositoryBridge.list();

    return TodoPresentation.getList(result);
  }

  static async delete(params) {
    const removeTodo = new RemoveTodo(todosRepositoryBridge);
    await removeTodo.execute(params.id);
  }
}
