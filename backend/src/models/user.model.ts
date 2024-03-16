import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userModel = {

  getAllUsers: async () => {
    const getAllUsers = await prisma.user.findMany();
    return getAllUsers;
  },
  
};
