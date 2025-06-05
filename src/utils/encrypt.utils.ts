import crypto from 'crypto';

const algorithm = 'aes-256-ctr';

export function encrypt(content: string) {
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(content), cipher.final()]);

  return {
    encrypted: encrypted.toString('hex'),
    key: key.toString('hex'),
    iv: iv.toString('hex'),
  };
}