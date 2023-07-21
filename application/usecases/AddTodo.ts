import { AddTodoRepository } from "domain/repositories/TodosRepository";
import { Identifier } from "domain/security/Identifier";

export class AddTodo {
  constructor(
    private readonly todosRepository: AddTodoRepository,
    private readonly identifier: Identifier
  ) {}
  async execute(input: Input) {
    await this.todosRepository.save({
      ...input,
      id: this.identifier.createId(),
      status: "created",
      createdAt: new Date(),
    });
  }
}

export type Input = {
  description: string;
  score: number;
};
