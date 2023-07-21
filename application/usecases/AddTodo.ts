import { Todo } from "domain/entities/Todo";
import { AddTodoRepository } from "domain/repositories/TodosRepository";
import { Identifier } from "domain/security/Identifier";

export class AddTodo {
  constructor(
    private readonly todosRepository: AddTodoRepository,
    private readonly identifier: Identifier
  ) {}
  async execute(input: Input) {
    const todo = new Todo({
      ...input,
      id: this.identifier.createId(),
    });

    await this.todosRepository.save(todo);
  }
}

export type Input = {
  description: string;
  score: number;
};
