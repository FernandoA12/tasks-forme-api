import { Todo } from "domain/entities/Todo";
import { TodosRepository } from "domain/repositories/TodosRepository";

export class TodosRepositoryMemory implements TodosRepository {
  private todos: Todo.Props[] = [];
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
