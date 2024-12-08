/*
  Warnings:

  - Made the column `deptId` on table `Asset` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deptId` on table `Employee` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_deptId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_deptId_fkey";

-- AlterTable
ALTER TABLE "Asset" ALTER COLUMN "deptId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "deptId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Dept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Dept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
