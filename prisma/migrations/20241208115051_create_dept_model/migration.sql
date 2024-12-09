/*
  Warnings:

  - A unique constraint covering the columns `[symbol]` on the table `Dept` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Dept_symbol_key" ON "Dept"("symbol");
