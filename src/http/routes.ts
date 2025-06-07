import { FastifyInstance } from 'fastify'
import { encryptController } from './controllers/encrypt.controller'
import { decryptController } from './controllers/decrypt.controller'
import { encryptSwagger } from './swagger/encrypt.swagger'
import { decryptSwagger } from './swagger/decrypt.swagger'
import { helloSwagger } from './swagger/health.sagger'

export async function routes(app: FastifyInstance) {
  app.get('/', helloSwagger(), async (request, reply) => {
    reply.send({ message: `Hello World` })
  })

  app.post('/encrypt', encryptSwagger(), encryptController)
  app.post('/decrypt', decryptSwagger(), decryptController)
}
