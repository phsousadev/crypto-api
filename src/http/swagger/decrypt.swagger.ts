export function decryptSwagger() {
  return {
    schema: {
      tags: ['Decrypt'],
      summary: 'Decrypts an encrypted text',
      body: {
        type: 'object',
        required: ['encrypted', 'key', 'iv'],
        properties: {
          encrypted: {
            type: 'string',
            minLength: 1,
            description: 'Encrypted text',
          },
          key: {
            type: 'string',
            minLength: 64,
            maxLength: 64,
            description: 'Key must be 32 bytes in hex (64 characters)',
          },
          iv: {
            type: 'string',
            minLength: 32,
            maxLength: 32,
            description: 'IV must be 16 bytes in hex (32 characters)',
          },
        },
      },
      response: {
        200: {
          description: 'Text decrypted successfully',
          type: 'object',
          properties: {
            decrypted: { type: 'string' },
          },
        },
        400: {
          description: 'Decryption failed',
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
  }
}
