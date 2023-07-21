import { TodoAdapter } from "application/adapter/TodoAdapter";
import { Todo } from "domain/entities/Todo";
import { TodosRepository } from "domain/repositories/TodosRepository";
import { connection } from "infra/database";

export class TodosRepositoryDatabase implements TodosRepository {
  private collection = connection.collection<Todo.Props>("todos");
  async save(todo: Todo): Promise<void> {
    await this.collection.insertOne(todo);
  }
  async list(): Promise<Todo[]> {
    const results = await this.collection.find({ status: "created" }).toArray();
    return results.map(TodoAdapter.create);
  }
}
