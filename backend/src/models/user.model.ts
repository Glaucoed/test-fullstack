import { IUser } from "@/interfaces/user.interface";
import { PrismaClient, User } from "@prisma/client";


const prisma = new PrismaClient();

export const userModel = {

  getAllUsers: async (): Promise<User[]> => {
    const getAllUsers = await prisma.user.findMany();
    return getAllUsers;
  },

  createUser: async (body: IUser): Promise<User> => {
    const createUser = await prisma.user.create({ data: body });
    return createUser;
  },

  updateUser: async (body: IUser, id: string): Promise<User> => {
    const updateUser = await prisma.user.update({
      where: { id: id },
      data: body,
    });
    return updateUser;
  },

  getUserById: async (id: string): Promise<User | null> => {
    const getUserById = await prisma.user.findUnique({
      where: { id },
    });
    return getUserById;
  }
  
};
