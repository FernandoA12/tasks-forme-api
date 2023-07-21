import { AddTodo } from "application/usecases/AddTodo";

it("should be add todo", async () => {
  const repository = {
    save: jest.fn(),
  };
  const identifier = {
    createId: jest.fn().mockReturnValue("1"),
  };
  const sut = new AddTodo(repository, identifier);
  const input = { description: "Fazer arroz", score: 15 };
  await sut.execute(input);

  const todoSent = repository.save.mock.calls[0][0];

  expect(repository.save).toBeCalled();
  expect(identifier.createId).toBeCalled();
  expect(todoSent.description).toBe("Fazer arroz");
  expect(todoSent.score).toBe(15);
  expect(todoSent.id).toBe("1");
  expect(todoSent.status).toBe("created");
  expect(todoSent.createdAt.toLocaleDateString("pt-BR")).toBe(
    new Date().toLocaleDateString("pt-BR")
  );
});
