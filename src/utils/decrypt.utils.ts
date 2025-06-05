import crypto from 'crypto';

const algorithm = 'aes-256-ctr';

export function decrypt(encrypted: string, key: string, iv: string) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(key, 'hex'),
    Buffer.from(iv, 'hex')
  );
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encrypted, 'hex')),
    decipher.final()
  ]);

  return decrypted.toString();
}