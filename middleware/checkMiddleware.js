import prisma from "../db/prisma.js";

const checkDeptExists = async (req, res, next) => {
  const symbol = req.body?.symbol || req.params?.symbol;
  try {
    const dept = await prisma.dept.findFirst({
      where: { symbol },
    });
    if (!dept) {
      next();
    }
    if (dept && req.method === "DELETE") {
      // If it's a DELETE request and the department exists, proceed with deletion
      next();
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error checking department existence",
      error: error.message,
    });
  }
};

const checkEmployeeExists = async (req, res, next) => {
  const uniqueId = req.body?.uniqueId || req.params?.uniqueId;
  try {
    const employee = await prisma.employee.findUnique({
      where: { uniqueId },
    });
    if (employee && req.method === "POST") {
      return res.status(400).json({
        message: "Employee already exists",
      });
    } else {
      next(); // Proceed if employee does not exist
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error checking employee existence",
      error: error.message,
    });
  }
};

const checkAssetExits = async (req, res, next) => {
  const  uniqueId  = req.body?.uniqueId || req.params?.uniqueId;
  try {
    // Check if the employee with the given uniqueId exists
    const asset = await prisma.asset.findUnique({
      where: { uniqueId },
    });
    if (asset && req.method === "POST") {
      return res.status(400).json({
        message: "Asset already exists",
      });
    }
    if (asset.status==="working" && req.method ==="PUT") {
      return next()
    }
    if (asset.status==="obsolete" && req.method === "PUT") {
      return res.status(400).json({
        message: "Asset already Scraped",
      });
    }
  next();
  } catch (error) {
    return res.status(500).json({
      message: "Error checking asset existence",
      error: error.message,
    });
  }
};

const checkAssetAssigned = async (req, res, next) => {
  const { uniqueId } = req.params ;

  try {
    // Check if the employee with the given uniqueId exists
    const asset = await prisma.asset.findUnique({
      where: { uniqueId },
    });
    if(asset && asset.employeeId !== null){
      return res.status(400).json({
        message: "Asset already assigned",
      });
  }
  next();
  } catch (error) {
    return res.status(500).json({
      message: "Error checking asset existence",
      error: error.message,
    });
  }
};

const checkEmplyeeWorking = async (req, res, next) => {
  const { employeeId } = req.body;
  const uniqueId = employeeId;
  try {
    const employee = await prisma.employee.findUnique({
      where: { uniqueId },
    });
    if (!employee) {
      return res.status(400).json({
        message: "Employee does not exist",
      });
    }
    if (employee.status === "resigned") {
      return res.status(400).json({
        message: "Employee  Resigned",
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error checking asset existence",
      error: error.message,
    });
  }
};
export {
  checkDeptExists,
  checkEmployeeExists,
  checkAssetExits,
  checkEmplyeeWorking,
  checkAssetAssigned
};
