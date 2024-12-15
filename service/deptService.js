import prisma from "../db/prisma.js";

const makeAddDept = async (dept, deptSymbol, req, res) => {
  try {
    const newDept = await prisma.dept.create({
      data: {
        dept,
        deptSymbol,
      },
    });
    return newDept;
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeDeleteDept = async (symbol, req, res) => {
  try {
    const deletedDept = await prisma.dept.delete({
      where: { symbol },
    });
    return {
      message: "Department deleted successfully",
      data: deletedDept,
    };
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeGetDept = async (req, res) => {
  try {
    const dept = await prisma.dept.findMany();
    return dept;
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeFindAsset = async (deptSymbol, req, res, next) => {
  try {
    const asset = await prisma.asset.findMany({
      where: { deptSymbol },
    });
    return asset;
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeFindEmployee = async (deptSymbol, req, res, next) => {
  try {
    const employee = await prisma.employee.findMany({
      where: { deptSymbol },
    });
    return {
      message: "Employees found successfully",
      data: employee,
    };
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {
  makeAddDept,
  makeDeleteDept,
  makeFindAsset,
  makeFindEmployee,
  makeGetDept,
};
