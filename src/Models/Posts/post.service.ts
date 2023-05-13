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

  async create(data: CreatePost) {
    const _data = [];

    for (let i = 0; i < 12000; i++) {
      _data.push({
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
      });
    }
    await this.prisma.post.createMany({ data: _data });

    return 'ok';
  }
}
