-- DropForeignKey
ALTER TABLE "AssetHistory" DROP CONSTRAINT "AssetHistory_employeeId_fkey";

-- AlterTable
ALTER TABLE "AssetHistory" ALTER COLUMN "employeeId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "AssetHistory" ADD CONSTRAINT "AssetHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uniqueId") ON DELETE SET NULL ON UPDATE CASCADE;
