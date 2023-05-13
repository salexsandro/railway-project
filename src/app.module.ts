import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './DataBase/prisma.service';
import { UserModule } from './Models/User/user.module';
import { PostModule } from './Models/Posts/post.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
