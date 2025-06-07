import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const ALGORITHM = 'aes-256-ctr'
const IV_LENGTH = 16
const KEY_LENGTH = 32

export function encryptText(text: string): {
  encrypted: string
  key: string
  iv: string
} {
  if (!text || typeof text !== 'string') {
    throw new Error('Text to encrypt cannot be empty and must be a string.')
  }

  try {
    const iv = randomBytes(IV_LENGTH)
    const key = randomBytes(KEY_LENGTH)

    const cipher = createCipheriv(ALGORITHM, key, iv)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')

    return {
      encrypted,
      key: key.toString('hex'),
      iv: iv.toString('hex'),
    }
  } catch (error) {
    throw new Error('Failed to encrypt text.')
  }
}

export function decryptText(
  encrypted: string,
  key: string,
  iv: string,
): { originalText: string } {
  if (!encrypted || typeof encrypted !== 'string') {
    throw new Error('Encrypted text cannot be empty and must be a string.')
  }
  if (!key || typeof key !== 'string' || !/^[0-9a-fA-F]{64}$/.test(key)) {
    throw new Error(
      'Invalid or empty key provided. Must be a 64-character hexadecimal string.',
    )
  }
  if (!iv || typeof iv !== 'string' || !/^[0-9a-fA-F]{32}$/.test(iv)) {
    throw new Error(
      'Invalid or empty IV provided. Must be a 32-character hexadecimal string.',
    )
  }

  try {
    const keyBuffer = Buffer.from(key, 'hex')
    const ivBuffer = Buffer.from(iv, 'hex')

    if (keyBuffer.length !== KEY_LENGTH || ivBuffer.length !== IV_LENGTH) {
      throw new Error('Key or IV has incorrect length after conversion.')
    }

    const decipher = createDecipheriv(ALGORITHM, keyBuffer, ivBuffer)
    let decryptedText = decipher.update(encrypted, 'hex', 'utf8')
    decryptedText += decipher.final('utf8')

    return { originalText: decryptedText }
  } catch (error) {
    throw new Error(
      'Failed to decrypt text. Check key, IV, and encrypted text.',
    )
  }
}
