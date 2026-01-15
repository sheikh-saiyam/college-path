/*
  Warnings:

  - You are about to drop the `review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_admissionId_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_collegeId_fkey";

-- DropTable
DROP TABLE "review";

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "admissionId" TEXT NOT NULL,
    "collegeId" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Review_admissionId_idx" ON "Review"("admissionId");

-- CreateIndex
CREATE INDEX "Review_collegeId_idx" ON "Review"("collegeId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_admissionId_fkey" FOREIGN KEY ("admissionId") REFERENCES "Admission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
