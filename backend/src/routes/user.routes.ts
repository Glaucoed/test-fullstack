import { FastifyInstance } from 'fastify'
import { userController } from "../controllers/user.controller"

export async function userRoutes(app: FastifyInstance) {

  app.get("/users", userController.getAllUsers);
  app.post("/users", userController.createUser);
  app.put("/users/:id", userController.updateUser);
  app.get("/users/:id", userController.getUserById);

}