import { IUser } from "@/interfaces/user.interface";
import { userService } from "../services/user.services";
import { FastifyReply, FastifyRequest } from "fastify";

export const userController = {

  getAllUsers: async (_req: FastifyRequest, res: FastifyReply) => {
    try {
      const getAllUsers = await userService.getAllUsers();
      return res.status(200).send(getAllUsers);
    } catch (error) {
      res.status(500).send({ error: "Error getting all users" });
    }
  },
  
  createUser: async (req: FastifyRequest<{ Body: IUser }>, res: FastifyReply) => {
    try {
      const createUser = await userService.createUser(req.body);
      return res.status(201).send(createUser);
    } catch (error) {
      res.status(500).send({ error: "Error creating user" });
    }
  },

  updateUser: async ( req: FastifyRequest<{ Params: { id: string }, Body: IUser }>, res: FastifyReply ) => {
    try {
      const updateUser = await userService.updateUser(req.body, req.params.id);
      return res.status(200).send(updateUser);
    } catch (error) {
      res.status(500).send({ error: "Error updating user" });
    }
  },

  getUserById: async (req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) => {
    try {
      const getUserById = await userService.getUserById(req.params.id);
      return res.status(200).send(getUserById);
    } catch (error) {
      res.status(500).send({ error: "Error getting user by id" });
    }
  }
  
};
