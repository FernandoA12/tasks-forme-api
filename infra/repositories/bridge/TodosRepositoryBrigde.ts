import { Todo } from "domain/entities/Todo";
import { TodosRepository } from "domain/repositories/TodosRepository";

export class TodosRepositoryBridge implements TodosRepository {
  private repository: TodosRepository;
  constructor(repositoryDev: TodosRepository, repositoryProd: TodosRepository) {
    this.repository =
      process.env.NODE_ENV !== "production" ? repositoryDev : repositoryProd;
  }
  async findOne(id: string): Promise<Todo> {
    return await this.repository.findOne(id);
  }
  async update(todo: Todo): Promise<void> {
    return await this.repository.update(todo);
  }
  async save(todo: Todo): Promise<void> {
    return await this.repository.save(todo);
  }

  async list(): Promise<Todo[]> {
    return await this.repository.list();
  }
}

// CONTROLE => APARELHO
// TV
// SOM
//
