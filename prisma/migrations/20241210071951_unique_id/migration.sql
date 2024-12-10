/*
  Warnings:

  - You are about to drop the column `assetId` on the `AssetHistory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AssetHistory" DROP CONSTRAINT "AssetHistory_assetId_fkey";

-- AlterTable
ALTER TABLE "AssetHistory" DROP COLUMN "assetId",
ADD COLUMN     "uniqueId" TEXT;

-- AddForeignKey
ALTER TABLE "AssetHistory" ADD CONSTRAINT "AssetHistory_uniqueId_fkey" FOREIGN KEY ("uniqueId") REFERENCES "Asset"("uniqueId") ON DELETE SET NULL ON UPDATE CASCADE;
