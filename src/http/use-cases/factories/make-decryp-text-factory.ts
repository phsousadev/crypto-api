import { PrismaEncryptedTextRepository } from 'repositories/prisma/prisma-encrypt-text-repository'
import { DecryptUseCase } from '../decrypt-text-use-case'

export function makeCreateDecryptTextFactory() {
  const decryptTextRepository = new PrismaEncryptedTextRepository()
  const decryptTextUseCase = new DecryptUseCase(decryptTextRepository)

  return decryptTextUseCase
}
