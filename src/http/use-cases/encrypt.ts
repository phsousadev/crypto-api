
export class EncryptUseCase {
  constructor() { }

  execute(content: string) {
    const { encrypted, key, iv } = cryptoUtil.encrypt(text);

    logRepository.create({ originalText: text, encrypted, key, iv });

    return { encrypted, key, iv };
  }
}