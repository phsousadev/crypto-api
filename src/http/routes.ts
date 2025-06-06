import { FastifyInstance } from 'fastify'
import { encryptController } from './controllers/encrypt.controller'

export async function routes(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    reply.send({ message: `Hello World` })
  })

  app.post('/encrypt', encryptController)
}
