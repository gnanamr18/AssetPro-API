/*
  Warnings:

  - You are about to drop the column `symbol` on the `Dept` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[deptSymbol]` on the table `Dept` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_deptId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_deptId_fkey";

-- DropIndex
DROP INDEX "Dept_symbol_key";

-- AlterTable
ALTER TABLE "Dept" DROP COLUMN "symbol",
ADD COLUMN     "deptSymbol" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Dept_deptSymbol_key" ON "Dept"("deptSymbol");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Dept"("deptSymbol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Dept"("deptSymbol") ON DELETE RESTRICT ON UPDATE CASCADE;
