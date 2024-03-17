import { IUser } from "@/interfaces/user.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userModel = {

  getAllUsers: async () => {
    const getAllUsers = await prisma.user.findMany();
    return getAllUsers;
  },

  createUser: async (body: IUser) => {
    const createUser = await prisma.user.create({ data: body });
    return createUser;
  },

  updateUser: async (body: IUser, id: string) => {
    const updateUser = await prisma.user.update({
      where: { id: id },
      data: body,
    });
    return updateUser;
  },

  getUserById: async (id: string) => {
    const getUserById = await prisma.user.findUnique({
      where: { id },
    });
    return getUserById;
  }
  
};
