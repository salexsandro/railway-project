import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/DataBase/prisma.service';

export interface CreatePost {
  name: string;
  description: string;
  user_id: number;
}

@Injectable()
export class PostService {
  constructor(readonly prisma: PrismaService) {}

  async create(data: CreatePost): Promise<CreatePost> {
    for (let i = 0; i < 150; i++) {
      await this.prisma.post.create({
        data,
      });
    }
    const post = await this.prisma.post.create({
      data,
    });

    return post;
  }
}
