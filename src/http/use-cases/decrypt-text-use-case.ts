import { DescryptionFailedError } from 'http/errors/decryption-failed'
import { EncryptedTextRepository } from 'repositories/encrypt-text'
import { decryptText } from 'utils/crypt.utils'

type DecryptInput = {
  encrypted: string
  key: string
  iv: string
}

type DecryptResult = {
  decrypted: string
}

export class DecryptUseCase {
  constructor(private encryptedTextRepository: EncryptedTextRepository) {}

  async execute(input: DecryptInput): Promise<DecryptResult> {
    const decrypted = decryptText(input.encrypted, input.key, input.iv)

    if (!decrypted) throw new DescryptionFailedError()

    return {
      decrypted: decrypted.originalText,
    }
  }
}
