import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

interface UsersRepository extends Prisma.UserCreateInput {}

export class PrismaUsersRepository {
  async create(data: UsersRepository) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
