import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/DataBase/prisma.service';
import { PrismaClietEntity } from './prismaDataBase';

export interface CreatePost {
  name: string;
  description: string;
  user_id: number;
}

@Injectable()
export class PostService {
  constructor(readonly prisma: PrismaService) {}

  async create(data: CreatePost): Promise<CreatePost> {
    const prisma_create = new PrismaClietEntity('ya');

    for (let i = 0; i < 300; i++) {
      await prisma_create.post.create({
        data,
      });
    }
    const post = await prisma_create.post.create({
      data,
    });

    return post;
  }
}
