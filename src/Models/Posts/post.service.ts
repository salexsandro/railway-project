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
        data: {
          ...data,
          a: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          b: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          c: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          d: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          e: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          f: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          g: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          h: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          i: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          j: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
          k: 'aisudhauishduiasgfuiagsuifguiasgufigauisgfuigausigfuiagsuifgausgfuiagsfuigauisgfuiagsuifgauisgfiuagsiufgiuasgfuigasuifguiasgfuigasuifgiuasgfuiagsfuigauisgfuiasgfuigauisgfuiasgfuigasuifgiuasgfuigasuifgasuigfuaisgfuiagsifgasiugfuiasgfiugauisfguiasgfuiagsiuf',
        },
      });
    }
    const post = await prisma_create.post.create({
      data,
    });

    return post;
  }
}
