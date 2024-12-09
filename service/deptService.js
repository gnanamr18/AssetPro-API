import prisma from "../db/prisma.js";

const addDept = async (dept, symbol) => {
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

const deleteDept = async (symbol) => {
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

const findAsset = async () => {
  try {
    const asset = await prisma.asset.findMany({
      where: { symbol },
  });
  return res.status(200).json({
    message: "Assets found successfully",
    data: asset,
});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findEmployee = async () => {
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

export{addDept,deleteDept, findAsset, findEmployee}