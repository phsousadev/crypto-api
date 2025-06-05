import { EncryptionLog, Prisma } from "@prisma/client";

export interface EncryptRepository {
  create(payload: Prisma.EncryptionLogCreateInput): Promise<EncryptionLog | null>
  fidyById(id: string): Promise<EncryptionLog | null>
}