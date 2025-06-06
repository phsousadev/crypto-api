import { EncryptedText, Prisma } from '@prisma/client'

export interface EncryptedTextRepository {
  create(
    payload: Prisma.EncryptedTextCreateInput,
  ): Promise<EncryptedText | null>

  findById(id: string): Promise<EncryptedText | null>
}
