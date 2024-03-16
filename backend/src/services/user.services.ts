import { userModel } from "../models/user.model";

export const userService = {

  getAllUsers: async () => {
    try {
      const getAllUsers = await userModel.getAllUsers();
      return getAllUsers;
    } catch (error) {}
  },
  
};
