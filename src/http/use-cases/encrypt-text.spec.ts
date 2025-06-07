/* eslint-disable @typescript-eslint/no-var-requires */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { EncryptedTextRepository } from 'repositories/encrypt-text'
import { CreateEncryptTextUseCase } from './encrypt-text-use-case'

vi.mock('lib/logger', () => ({
  logger: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}))

describe('CreateEncryptTextUseCase', () => {
  let useCase: CreateEncryptTextUseCase
  let encryptedTextRepository: EncryptedTextRepository

  beforeEach(() => {
    encryptedTextRepository = {
      create: vi.fn().mockResolvedValue(null),
      findById: vi.fn().mockResolvedValue(null),
    }

    useCase = new CreateEncryptTextUseCase(encryptedTextRepository)
  })

  it('deve retornar encrypted, key e iv ao criptografar texto válido', async () => {
    const result = await useCase.execute({ text: 'mensagem secreta' })

    expect(result).toHaveProperty('encrypted')
    expect(result).toHaveProperty('key')
    expect(result).toHaveProperty('iv')

    expect(result.encrypted.length).toBeGreaterThan(0)
    expect(result.key).toMatch(/^[0-9a-f]{64}$/)
    expect(result.iv).toMatch(/^[0-9a-f]{32}$/)
  })
})
