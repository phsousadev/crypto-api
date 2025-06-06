import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateDecryptTextFactory } from 'http/use-cases/factories/make-decryp-text-factory'
import z from 'zod'

export async function decryptController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const decryptBodySchema = z.object({
    encrypted: z.string().min(1, 'Encrypted text is required'),
    key: z.string().length(64, 'Key must be 32 bytes in hex (64 characters)'),
    iv: z.string().length(32, 'IV must be 16 bytes in hex (32 characters)'),
  })

  try {
    const { encrypted, key, iv } = decryptBodySchema.parse(request.body)

    const decryptUseCase = makeCreateDecryptTextFactory()

    const result = await decryptUseCase.execute({ encrypted, key, iv })

    return reply.send(result)
  } catch (error) {
    console.error(error)
    return reply.status(400).send({
      message: error instanceof Error ? error.message : 'Invalid request',
    })
  }
}
