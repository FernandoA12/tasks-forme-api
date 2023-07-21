import { Todo } from "domain/entities/Todo";

export class TodoAdapter {
  static create(props: Todo.Props) {
    return new Todo(props);
  }
}
