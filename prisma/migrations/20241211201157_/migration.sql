-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_deptId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_deptId_fkey";

-- AlterTable
ALTER TABLE "Asset" ALTER COLUMN "deptId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Dept" ALTER COLUMN "symbol" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "deptId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Dept"("symbol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Dept"("symbol") ON DELETE RESTRICT ON UPDATE CASCADE;
