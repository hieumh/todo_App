import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createWithGoogle(userId: string, email: string, name: string) {
    const newUser = await this.prismaClient.account.create({
      data: { userId, email: email, userName: name },
    });

    return newUser;
  }
}
