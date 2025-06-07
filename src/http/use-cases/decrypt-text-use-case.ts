import { DescryptionFailedError } from 'http/errors/decryption-failed'
import { logger } from 'lib/logger'
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

    if (!decrypted) {
      logger.warn({
        msg: 'Failed to decrypt',
        data: {
          keyPreview: input.key.slice(0, 6),
          ivPreview: input.iv.slice(0, 6),
        },
      })
      throw new DescryptionFailedError()
    }

    logger.info({
      msg: 'Text decrypted successfully',
      data: {
        length: decrypted.originalText.length,
      },
    })

    return {
      decrypted: decrypted.originalText,
    }
  }
}
