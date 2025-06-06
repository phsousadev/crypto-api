import { PrismaEncryptedTextRepository } from 'repositories/prisma/prisma-encrypt-text-repository'
import { CreateEncryptTextUseCase } from '../encrypt-text-use-case'

export function makeCreateEncrypTextFactory() {
  const encryptedTextRepository = new PrismaEncryptedTextRepository()
  const encryptedTextUseCase = new CreateEncryptTextUseCase(
    encryptedTextRepository,
  )

  return encryptedTextUseCase
}
