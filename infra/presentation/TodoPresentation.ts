import { Todo } from "domain/entities/Todo";

export class TodoPresentation {
  static getTodo(todo: Todo) {
    return {
      id: todo.id,
      description: todo.description,
      createdAt: todo.createdAt.toLocaleString("pt-BR"),
      score: todo.score,
      status: todo.status,
    };
  }

  static getList(todos: Todo[]) {
    return todos.map(TodoPresentation.getTodo);
  }
}
