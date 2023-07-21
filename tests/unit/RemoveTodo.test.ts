import { RemoveTodo } from "application/usecases/RemoveTodo";
import { Todo } from "domain/entities/Todo";

it("should remove todo", async () => {
  const repository = {
    findOne: jest.fn().mockResolvedValue(
      new Todo({
        id: "1",
        description: "any",
      })
    ),
    update: jest.fn(),
  };
  const sut = new RemoveTodo(repository);
  await sut.execute("1");
  expect(repository.findOne).toBeCalled();
  expect(repository.update.mock.calls[0][0].status).toBe("deleted");
});

it("should not call update if todo not exist", async () => {
  const repository = {
    findOne: jest.fn().mockResolvedValue(null),
    update: jest.fn(),
  };
  const sut = new RemoveTodo(repository);
  await sut.execute("1");
  expect(repository.findOne).toBeCalled();
  expect(repository.update).not.toBeCalled();
});
