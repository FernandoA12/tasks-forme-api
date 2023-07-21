import { RemoveTodoRepository } from "domain/repositories/TodosRepository";

export class RemoveTodo {
  constructor(private readonly todosRepository: RemoveTodoRepository) {}
  async execute(id: string) {
    const todo = await this.todosRepository.findOne(id);
    if (!todo) {
      return;
    }
    todo.remove();
    await this.todosRepository.update(todo);
  }
}
