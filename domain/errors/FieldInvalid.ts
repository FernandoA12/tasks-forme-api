export class FieldInvalid extends Error {
  constructor(field: string) {
    super(`${field} is not a valid`);
    this.name = "FieldInvalid";
  }
}
