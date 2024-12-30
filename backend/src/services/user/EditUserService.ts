import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';
import { UserData } from '../../interfaces/user/UserTypes';

class EditUserService {
  async execute(id: string, data: UserData): Promise<UserData> {
    const passwordHash = await hash(data.password, 10);

    const user = await prismaClient.user.update({
      where: {
        id
      },
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

export { EditUserService };