import { EncryptionFailedError } from 'http/errors/encryption-failed'
import { logger } from 'lib/logger'
import { EncryptedTextRepository } from 'repositories/encrypt-text'
import { encryptText } from 'utils/crypt.utils'

interface CreateEncryptTextUseCaseRequest {
  text: string
}

interface CreateEncryptTextUseCaseResponse {
  encrypted: string
  key: string
  iv: string
}

export class CreateEncryptTextUseCase {
  constructor(private encryptedTextRepository: EncryptedTextRepository) {}

  async execute({
    text,
  }: CreateEncryptTextUseCaseRequest): Promise<CreateEncryptTextUseCaseResponse> {
    if (!text) {
      logger.warn({
        msg: 'Received empty text for encryption',
      })
      throw new EncryptionFailedError()
    }

    logger.info({
      msg: 'Starting encryption',
      meta: {
        length: text.length,
        preview: text.slice(0, 10),
      },
    })

    try {
      const { encrypted, key, iv } = encryptText(text)

      logger.info({
        msg: 'Encryption successful',
        meta: {
          encryptedLength: encrypted.length,
        },
      })

      return {
        encrypted,
        key,
        iv,
      }
    } catch (error) {
      logger.error({
        msg: 'Erro durante criptografia',
        err: error,
      })

      throw new EncryptionFailedError()
    }
  }
}
