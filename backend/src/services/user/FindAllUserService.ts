import prismaClient from "../../prisma";
import { UserData } from "../../interfaces/user/UserTypes";

class FindAllUserService {
  async execute(): Promise<UserData[]> {
    const users = await prismaClient.user.findMany();

    return users;
  }
}

export { FindAllUserService };