import { Prisma, EncryptionLog } from "@prisma/client";
import { EncryptRepository } from "../encrypt-repository";
import { prisma } from "@/lib/prisma";

export class PrismaEncryptRepository implements EncryptRepository {
  async create(payload: Prisma.EncryptionLogCreateInput): Promise<EncryptionLog | null> {
    return await prisma.encryptionLog.create({
      data: payload
    })
  }
  async fidyById(id: string): Promise<EncryptionLog | null> {
    return await prisma.encryptionLog.findUnique({
      where: {
        id
      }
    })
  }
}