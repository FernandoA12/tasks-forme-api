import { TodoAdapter } from "application/adapter/TodoAdapter";
import { Todo } from "domain/entities/Todo";
import { TodosRepository } from "domain/repositories/TodosRepository";

export class TodosRepositoryMemory implements TodosRepository {
  private todos: Todo.Props[] = [];

  async list(): Promise<Todo[]> {
    return this.todos
      .filter((todo) => todo.status === "created")
      .map(TodoAdapter.create);
  }
  async save(todo: Todo): Promise<void> {
    this.todos.push({
      description: todo.description,
      id: todo.id,
      createdAt: todo.createdAt,
      score: todo.score,
      status: todo.status,
    });
  }
}
