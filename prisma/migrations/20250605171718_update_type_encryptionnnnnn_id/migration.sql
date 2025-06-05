/*
  Warnings:

  - The primary key for the `EncryptionLog` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "EncryptionLog" DROP CONSTRAINT "EncryptionLog_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "EncryptionLog_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "EncryptionLog_id_seq";
