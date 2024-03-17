import { IUser } from "@/interfaces/user.interface";
import { userModel } from "../models/user.model";

export const userService = {

  getAllUsers: async () => {
    try {
      const getAllUsers = await userModel.getAllUsers();
      return getAllUsers;
    } catch (error) {}
  },
  
  createUser: async (body: IUser) => {
    try {
      const createUser = await userModel.createUser(body);
      return createUser;
    } catch (error) {}
  },

  updateUser: async (body: IUser, id: string) => {
    try {
      const updateUser = await userModel.updateUser(body, id);
      return updateUser;
    } catch (error) {}
  },

  getUserById: async (id: string) => {
    try {
      const getUserById = await userModel.getUserById(id);
      return getUserById;
    } catch (error) {}
  }
  
};
