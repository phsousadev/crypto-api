-- CreateTable
CREATE TABLE "EncryptedText" (
    "id" TEXT NOT NULL,
    "encryptedData" TEXT NOT NULL,
    "iv" VARCHAR(64) NOT NULL,
    "key" VARCHAR(128) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EncryptedText_pkey" PRIMARY KEY ("id")
);
