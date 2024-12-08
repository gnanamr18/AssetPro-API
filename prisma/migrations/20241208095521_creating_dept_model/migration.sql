/*
  Warnings:

  - You are about to drop the column `dept` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `designation` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `dept` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'obsolete';

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "dept",
DROP COLUMN "designation",
ADD COLUMN     "deptId" INTEGER,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'working';

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "dept",
ADD COLUMN     "deptId" INTEGER;

-- CreateTable
CREATE TABLE "Dept" (
    "id" SERIAL NOT NULL,
    "dept" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "Dept_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Dept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Dept"("id") ON DELETE SET NULL ON UPDATE CASCADE;
