/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Center` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Center" ADD COLUMN     "email" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Center_email_key" ON "Center"("email");
