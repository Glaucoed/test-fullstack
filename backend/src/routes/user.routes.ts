import { FastifyInstance } from 'fastify'
import { userController } from "../controllers/user.controller"

export async function userRoutes(app: FastifyInstance) {

  app.get("/users", userController.getAllUsers );

}