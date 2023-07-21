import { Todo } from "domain/entities/Todo";
import { FieldInvalid } from "domain/errors/FieldInvalid";

it("should create a new Todo entity", () => {
  const sut = new Todo({
    id: "1",
    description: "Fazer arroz",
  });
  expect(sut.id).toBe("1");
  expect(sut.description).toBe("Fazer arroz");
  expect(sut.score).toBe(0);
  expect(sut.status).toBe("created");
  expect(sut.createdAt.toLocaleDateString("pt-BR")).toBe(
    new Date().toLocaleDateString("pt-BR")
  );
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const sut2 = new Todo({
    id: "1",
    description: "Fazer arroz",
    createdAt: tomorrow,
  });

  expect(sut2.createdAt.toLocaleDateString("pt-BR")).toBe(
    tomorrow.toLocaleDateString("pt-BR")
  );
});

it("should throw an exception when not sent description", () => {
  expect(
    () =>
      new Todo({
        id: "1",
        description: "",
      })
  ).toThrowError(new FieldInvalid("description"));
});

it("should throw an exception when the score is invalid", () => {
  expect(
    () =>
      new Todo({
        id: "1",
        description: "any",
        score: -100,
      })
  ).toThrowError(new FieldInvalid("score"));
});
