import { Todo } from "domain/entities/Todo";

export interface AddTodoRepository extends Pick<TodosRepository, "save"> {}

export interface TodosRepository {
  save(todo: Todo): Promise<void>;
}
