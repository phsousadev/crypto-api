export function helloSwagger() {
  return {
    schema: {
      tags: ['Health'],
      summary: 'Returns a hello world message',
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Hello World' },
          },
        },
      },
    },
  }
}
