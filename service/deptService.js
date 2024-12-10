import prisma from "../db/prisma.js";

const makeAddDept = async (dept, symbol,req,res) => {
  try {
    const newDept = await prisma.dept.create({
      data: {
        dept,
        symbol,
      },
    });
    return newDept;
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeDeleteDept = async (symbol,req,res) => {
  try {
    const deletedDept = await prisma.dept.delete({
      where: { symbol },
  });
  console.log(deletedDept,"deleteDept")
  return({
    message: "Department deleted successfully",
    data: deletedDept,
});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeGetDept = async (req,res) => {
  try {
    const dept = await prisma.dept.findMany();
  return dept
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeFindAsset = async (req,res,next,symbol) => {
  try {
    const asset = await prisma.asset.findMany({
      where: { symbol },
  });
  console.log(asset,"asset")
  return asset
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeFindEmployee = async (req,res,next,symbol) => {
  try {
    const employee = await prisma.employee.findMany({
      where: { dept:{symbol:symbol} },
  });
  return({
    message: "Employees found successfully",
    data: employee,
});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export{makeAddDept,makeDeleteDept, makeFindAsset, makeFindEmployee , makeGetDept}