import { FastifyReply, FastifyRequest } from 'fastify'
import { EncryptionFailedError } from 'http/errors/encryption-failed'
import { makeCreateEncrypTextFactory } from 'http/use-cases/factories/make-create-encrpt-text-factory'
import { z } from 'zod'

export async function encryptController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const encryptBodySchema = z.object({
    text: z.string().min(1, 'Text to encrypt cannot be empty.'),
  })

  const { text } = encryptBodySchema.parse(request.body)

  try {
    const encryptUseCase = makeCreateEncrypTextFactory()

    const { encrypted, key, iv } = await encryptUseCase.execute({ text })

    return reply.status(201).send({
      encrypted,
      key,
      iv,
    })
  } catch (err) {
    if (err instanceof EncryptionFailedError) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }
}
