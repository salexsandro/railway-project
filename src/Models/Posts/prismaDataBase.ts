import { PrismaClient } from '@prisma/client';

class PrismaClietEntity extends PrismaClient {
  constructor(url: string) {
    super({
      datasources: {
        db: {
          url: `postgresql://postgres:ukM53frRqFTjIiGpxKO7@containers-us-west-149.railway.app:8002/railway`,
        },
      },
    });
  }
}

export { PrismaClietEntity };
