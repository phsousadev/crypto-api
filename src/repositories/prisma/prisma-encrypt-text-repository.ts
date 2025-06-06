import { Prisma, EncryptedText } from '@prisma/client'
import { prisma } from 'lib/prisma'
import { EncryptedTextRepository } from 'repositories/encrypt-text'

export class PrismaEncryptedTextRepository implements EncryptedTextRepository {
  async create(
    payload: Prisma.EncryptedTextCreateInput,
  ): Promise<EncryptedText | null> {
    return await prisma.encryptedText.create({
      data: payload,
    })
  }

  async findById(id: string): Promise<EncryptedText | null> {
    return await prisma.encryptedText.findUnique({
      where: {
        id,
      },
    })
  }
}
