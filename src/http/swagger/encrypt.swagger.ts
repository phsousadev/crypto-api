export function encryptSwagger() {
  return {
    schema: {
      tags: ['Encrypt'],
      summary: 'Encrypts a text',
      body: {
        type: 'object',
        required: ['text'],
        properties: {
          text: { type: 'string' },
        },
      },
      response: {
        200: {
          description: 'Text encrypted successfully',
          type: 'object',
          properties: {
            encryptedText: { type: 'string' },
            key: { type: 'string' },
            iv: { type: 'string' },
          },
        },
      },
    },
  }
}
