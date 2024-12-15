/*
  Warnings:

  - You are about to drop the column `deptId` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `deptId` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `deptSymbol` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deptSymbol` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_deptId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_deptId_fkey";

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "deptId",
ADD COLUMN     "deptSymbol" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "deptId",
ADD COLUMN     "deptSymbol" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_deptSymbol_fkey" FOREIGN KEY ("deptSymbol") REFERENCES "Dept"("deptSymbol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_deptSymbol_fkey" FOREIGN KEY ("deptSymbol") REFERENCES "Dept"("deptSymbol") ON DELETE RESTRICT ON UPDATE CASCADE;
