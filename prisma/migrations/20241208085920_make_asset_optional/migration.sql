-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_employeeId_fkey";

-- AlterTable
ALTER TABLE "Asset" ALTER COLUMN "employeeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
