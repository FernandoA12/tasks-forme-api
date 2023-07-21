import { Todo } from "domain/entities/Todo";

export interface AddTodoRepository extends Pick<TodosRepository, "save"> {}

export interface RemoveTodoRepository
  extends Pick<TodosRepository, "findOne" | "update"> {}

export interface TodosRepository {
  save(todo: Todo): Promise<void>;
  list(): Promise<Todo[]>;
  findOne(id: string): Promise<Todo | null>;
  update(todo: Todo): Promise<void>;
}
