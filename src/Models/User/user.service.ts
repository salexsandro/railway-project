import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/DataBase/prisma.service';

export interface CreateUser {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  constructor(readonly prisma: PrismaService) {}

  async create(data: CreateUser): Promise<CreateUser> {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }
}
