import { afterAll, expect, test, vi } from "vitest";
import supertest from "supertest";
import { app } from "../src/app";
import { mockUserData, mockUserDataUpdated } from "./mocks/mocks";

test("Teste para ver se o servidor está sendo executado", async () => {
  await app.ready();

  const response = await supertest(app.server).get("/").expect(200);

  expect(response.text).toBe("Server Running in port 3001");
});

test("Verificando se ao chamar a rota /user é retornado o status 200", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/users",
  });

  expect(response.statusCode).toBe(200);
});

test("Testando se ao cadastrar o novo cliente é retornar o status 201", async () => {
  const response = await supertest(app.server)
    .post("/users")
    .send(mockUserData);
  expect(response.status).toBe(201);
});

test("Testando se é possivel realizar o update", async () => {
  const response = await supertest(app.server)
    .put("/users/0d55b1c6-3129-4422-b9f5-947565ac5891")
    .send(mockUserData);

  expect(response.body).toEqual(mockUserDataUpdated);
});

afterAll(async () => {
  await app.close();
});
