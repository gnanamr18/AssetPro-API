-- CreateEnum
CREATE TYPE "Status" AS ENUM ('working', 'resigned', 'obsolete');

-- CreateEnum
CREATE TYPE "HistoryAction" AS ENUM ('purchased', 'assigned', 'returned', 'obsolete');

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "deptSymbol" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'working',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "deptSymbol" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'working',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "employeeId" TEXT,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dept" (
    "id" SERIAL NOT NULL,
    "dept" TEXT NOT NULL,
    "deptSymbol" TEXT NOT NULL,

    CONSTRAINT "Dept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetHistory" (
    "id" SERIAL NOT NULL,
    "uniqueId" TEXT,
    "employeeId" TEXT,
    "action" "HistoryAction" NOT NULL,
    "actionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssetHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_uniqueId_key" ON "Employee"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Asset_uniqueId_key" ON "Asset"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Dept_deptSymbol_key" ON "Dept"("deptSymbol");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_deptSymbol_fkey" FOREIGN KEY ("deptSymbol") REFERENCES "Dept"("deptSymbol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uniqueId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_deptSymbol_fkey" FOREIGN KEY ("deptSymbol") REFERENCES "Dept"("deptSymbol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetHistory" ADD CONSTRAINT "AssetHistory_uniqueId_fkey" FOREIGN KEY ("uniqueId") REFERENCES "Asset"("uniqueId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetHistory" ADD CONSTRAINT "AssetHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uniqueId") ON DELETE SET NULL ON UPDATE CASCADE;
