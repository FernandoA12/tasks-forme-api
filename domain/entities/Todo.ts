import { FieldInvalid } from "domain/errors/FieldInvalid";

export namespace Todo {
  export type Status = "created" | "deleted";
  export interface Props {
    readonly id: string;
    description: string;
    status?: Status;
    score?: number;
    createdAt?: Date;
  }
}
export class Todo {
  public readonly id: string;
  public description: string;
  public status?: Todo.Status = "created";
  public score?: number = 0;
  public createdAt?: Date = new Date();

  constructor(props: Todo.Props) {
    this.id = props.id;
    this.description = props.description;
    this.score = props.score || 0;
    this.createdAt = props.createdAt || new Date();

    if (!this.description) {
      throw new FieldInvalid("description");
    }

    if (this.score < 0) {
      throw new FieldInvalid("score");
    }
  }

  remove() {
    this.status = "deleted";
  }
}
