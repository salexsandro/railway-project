import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() data: CreateUser): Promise<CreateUser> {
    return this.userService.create(data);
  }
}
