import { EncryptionLog } from "@prisma/client";

export interface EncryptRepository {
  create(): Promise<EncryptionLog | null>
  fidyById(): Promise<EncryptionLog | null>
}