import prisma from "../db/prisma.js";

const makeAddDept = async (dept, symbol) => {
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

const makeDeleteDept = async (symbol) => {
  try {
    const deletedDept = await prisma.dept.delete({
      where: { symbol },
  });
  return res.status(200).json({
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
    console.log(dept,"dept")
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

const makeFindEmployee = async () => {
  try {
    const employee = await prisma.asset.findMany({
      where: { symbol },
  });
  return res.status(200).json({
    message: "Employees found successfully",
    data: employee,
});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export{makeAddDept,makeDeleteDept, makeFindAsset, makeFindEmployee , makeGetDept}