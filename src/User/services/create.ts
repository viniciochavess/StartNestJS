import { PrismaService } from 'src/database';
import { hash } from 'bcrypt';

interface requestUser {
  name: string;
  username: string;
  password: string;
  email: string;
}
interface responseUser {
  name: string;
  username: string;
  email: string;
  created_at: Date;
}

export class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(data: requestUser) {
    const alwaredExist = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { username: data.username }],
      },
    });

    if (alwaredExist) {
      throw new Error('User Alwared exist');
    }
    const passwordHash = await hash(data.password, 6);
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.email,
        username: data.username,
        password: passwordHash,
      },
    });

    return;
  }
}
