import prismaClient from '../../prisma';
import { hash } from "bcryptjs";
import { UserData } from "../../interfaces/user/UserTypes"

class CreateUserService {

  async execute( data: UserData): Promise<UserData> {
    const passwordHash = await hash(data.password, 10);

    const user = await prismaClient.user.create({
      data: {
        name: data.name,
        username: data.username,
        email: data.email,
        password: passwordHash,
        role: data.role
      }
    });

    return user;
  }
}

export { CreateUserService };