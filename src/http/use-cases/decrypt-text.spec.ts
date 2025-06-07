/* eslint-disable @typescript-eslint/no-var-requires */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DecryptUseCase } from './decrypt-text-use-case'
import { EncryptedTextRepository } from 'repositories/encrypt-text'
import { decryptText } from 'utils/crypt.utils'

vi.mock('lib/logger', () => ({
  logger: {
    info: vi.fn(),
    warn: vi.fn(),
  },
}))

vi.mock('utils/crypt.utils', () => ({
  decryptText: vi.fn(),
}))

describe('DecryptUseCase', () => {
  let useCase: DecryptUseCase
  let encryptedTextRepository: EncryptedTextRepository

  beforeEach(() => {
    encryptedTextRepository = {
      create: vi.fn().mockResolvedValue(null),
      findById: vi.fn().mockResolvedValue(null),
    }

    useCase = new DecryptUseCase(encryptedTextRepository)
  })

  it('deve retornar texto descriptografado ao executar com dados válidos', async () => {
    const mockedDecryptText = decryptText as unknown as ReturnType<typeof vi.fn>
    const fakeDecrypted = { originalText: 'texto descriptografado' }
    mockedDecryptText.mockReturnValue(fakeDecrypted)

    const input = {
      encrypted: 'encryptedValue',
      key: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
      iv: '0123456789abcdef0123456789abcdef',
    }

    const result = await useCase.execute(input)

    expect(result.decrypted).toBe(fakeDecrypted.originalText)
  })
})
