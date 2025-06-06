import { FastifyInstance } from 'fastify'
import { encryptController } from './controllers/encrypt.controller'
import { decryptController } from './controllers/decrypt.controller'

export async function routes(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    reply.send({ message: `Hello World` })
  })

  app.post('/encrypt', encryptController)
  app.post('/decrypt', decryptController)
}
