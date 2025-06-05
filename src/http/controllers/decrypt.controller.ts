import z from "zod"

export class EncryptController {
  constructor() { }

  async handle(request: Request, response: Response) {
    const encryptBodySchema = z.object({
      content: z.string().email(),
    })

    const { content } = encryptBodySchema.parse(request.body)

    try {
      const result = encryptionService.encrypt(text);
      response.json(result);
    } catch (error) {

    }
  }
}