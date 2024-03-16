import { IUser } from "@/interfaces/user.interface";
import { userService } from "../services/user.services";
import { FastifyReply, FastifyRequest } from "fastify";

export const userController = {

  getAllUsers: async (_req: FastifyRequest, res: FastifyReply) => {
    try {
      const getAllUsers = await userService.getAllUsers();
      return res.send(getAllUsers).status(200);
    } catch (error) {
      res.send({ error: "Error getting all users" });
    }
  },
  
  createUser: async (req: FastifyRequest<{ Body: IUser }>, res: FastifyReply) => {
    try {
      const createUser = await userService.createUser(req.body);
      return res.send(createUser).status(201);
    } catch (error) {
      res.send({ error: "Error creating user" });
    }
  },
  
};