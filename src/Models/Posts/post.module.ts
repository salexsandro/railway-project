import { Module } from '@nestjs/common';
import { PrismaService } from 'src/DataBase/prisma.service';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {}
