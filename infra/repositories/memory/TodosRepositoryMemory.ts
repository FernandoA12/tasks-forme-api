import { TodoAdapter } from "application/adapter/TodoAdapter";
import { Todo } from "domain/entities/Todo";
import { TodosRepository } from "domain/repositories/TodosRepository";

export class TodosRepositoryMemory implements TodosRepository {
  private static todos: Todo.Props[] = [];

  async findOne(id: string): Promise<Todo | null> {
    const todo = TodosRepositoryMemory.todos.find(
      (todo) => todo.id === id && todo.status === "created"
    );
    return todo ? TodoAdapter.create(todo) : null;
  }
  async update(todo: Todo): Promise<void> {
    TodosRepositoryMemory.todos = TodosRepositoryMemory.todos.map((t) => {
      if (t.id === todo.id && t.status === "created") {
        return todo;
      }
      return t;
    });
  }

  async list(): Promise<Todo[]> {
    return TodosRepositoryMemory.todos
      .filter((todo) => todo.status === "created")
      .map(TodoAdapter.create);
  }
  async save(todo: Todo): Promise<void> {
    TodosRepositoryMemory.todos.push({
      description: todo.description,
      id: todo.id,
      createdAt: todo.createdAt,
      score: todo.score,
      status: todo.status,
    });
  }
}
