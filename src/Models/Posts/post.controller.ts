import { Body, Controller, Post } from '@nestjs/common';
import { CreatePost, PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  create(@Body() data: CreatePost): Promise<CreatePost> {
    return this.postService.create(data);
  }
}
