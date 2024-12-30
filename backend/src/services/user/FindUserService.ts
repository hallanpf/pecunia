import prismaClient from "../../prisma";
import { UserData } from "../../interfaces/user/UserTypes";

class FindUserService {
  async execute(id: string): Promise<UserData> {
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}

export { FindUserService };