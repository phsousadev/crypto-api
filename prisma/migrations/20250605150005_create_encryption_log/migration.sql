-- CreateTable
CREATE TABLE "EncryptionLog" (
    "id" SERIAL NOT NULL,
    "originalText" TEXT NOT NULL,
    "encrypted" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "iv" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EncryptionLog_pkey" PRIMARY KEY ("id")
);
