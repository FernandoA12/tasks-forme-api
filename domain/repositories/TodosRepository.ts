export interface AddTodoRepository extends Pick<TodosRepository, "save"> {}

export interface TodosRepository {
  save(todo: any): Promise<void>;
}
