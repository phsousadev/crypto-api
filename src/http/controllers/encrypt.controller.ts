import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateEncrypTextFactory } from 'http/use-cases/factories/make-create-encrpt-text-factory'
import { z } from 'zod'

export async function encryptController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const encryptBodySchema = z.object({
    text: z.string().min(1, 'Text to encrypt cannot be empty.'),
  })

  try {
    const { text } = encryptBodySchema.parse(request.body)

    const encryptUseCase = makeCreateEncrypTextFactory()

    const { encryptedText, key, iv } = await encryptUseCase.execute({ text })

    return reply.status(201).send({
      encryptedText,
      key,
      iv,
    })
  } catch (err) {}
}
