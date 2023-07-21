import { server } from "infra/http/express";
import supertest from "supertest";

describe("TodoRouter", () => {
  it("GET /todos", async () => {
    const response = await supertest(server).get("/todos");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(0);
  });

  it("POST /todos", async () => {
    await supertest(server).post("/todos").send({
      description: "Todo 1",
      score: 200,
    });
    const response = await supertest(server).get("/todos");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].description).toBe("Todo 1");
    expect(response.body[0].score).toBe(200);
    expect(response.body[0].createdAt).toBe(new Date().toLocaleString("pt-BR"));
    expect(response.body[0].status).toBe("created");
  });

  it("DELETE /todos/:id", async () => {
    const { body: todos } = await supertest(server).get("/todos");
    await supertest(server).delete(`/todos/${todos[0].id}`);
    const response = await supertest(server).get("/todos");
    expect(response.body.length).toBe(0);
  });
});
