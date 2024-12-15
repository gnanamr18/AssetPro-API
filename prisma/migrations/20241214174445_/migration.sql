/*
  Warnings:

  - Made the column `deptSymbol` on table `Dept` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Dept" ALTER COLUMN "deptSymbol" SET NOT NULL;
