import { EncryptedTextRepository } from 'repositories/encrypt-text'
import { encryptText } from 'utils/crypt.utils'

interface CreateEncryptTextUseCaseRequest {
  text: string
}

interface CreateEncryptTextUseCaseResponse {
  encryptedText: string
  key: string
  iv: string
}

export class CreateEncryptTextUseCase {
  constructor(private encryptedTextRepository: EncryptedTextRepository) {}

  async execute({
    text,
  }: CreateEncryptTextUseCaseRequest): Promise<CreateEncryptTextUseCaseResponse> {
    const { encryptedText, key, iv } = encryptText(text)

    return {
      encryptedText,
      key,
      iv,
    }
  }
}
