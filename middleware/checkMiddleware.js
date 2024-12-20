import prisma from "../db/prisma.js";

const checkDeptExists = async (req, res, next) => {
  const deptSymbol = req.body?.deptSymbol || req.params?.deptSymbol;
  try {
    const dept = await prisma.dept.findFirst({
      where: { deptSymbol },
    }); 
    if (req.method === "POST") {
      if (!dept) {
        return next();
      } else {
        return res.status(404).json({ message: "Dept Already exist" });
      }
    }

    // For Deletion (DELETE): Proceed only if the department exists
    if (req.method === "DELETE") {
      if (!dept) {
        return res.status(404).json({
          message: `Department with symbol '${symbol}' does not exist. Cannot delete.`,
        });
      }
      return next();
    }

    // For Finding All (GET): Proceed only if the department exists
    if (req.method === "GET") {
      if (!dept) {
        return res.status(404).json({
          message: `Department with symbol '${symbol}' does not exist.`,
        });
      }
      return next();
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

const checkAssetExists = async (req, res, next) => {
  const uniqueId = req.body?.uniqueId || req.params?.uniqueId;

  try {
    // Check if the asset with the given uniqueId exists
    const asset = await prisma.asset.findUnique({
      where: { uniqueId },
    });

    // Handle POST requests: Prevent creation if the asset already exists
    if (req.method === "POST") {
      if (asset) {
        return res.status(400).json({
          message: "Asset already exists",
        });
      }
      return next(); // Proceed to create the new asset if it doesn't exist
    }

    // Handle PUT requests: Check asset's status
    if (req.method === "PUT") {
      if (!asset) {
        return res.status(404).json({
          message: `Asset with uniqueId '${uniqueId}' does not exist.`,
        });
      }

      // Proceed if the asset's status is "working"
      if (asset.status === "working") {
        return next();
      }

      // Block updates if the asset's status is "obsolete"
      if (asset.status === "obsolete") {
        return res.status(400).json({
          message: "Asset is already scrapped",
        });
      }
    }

    // For other methods, proceed as normal
    return next();
  } catch (error) {
    return res.status(500).json({
      message: "Error checking asset existence",
      error: error.message,
    });
  }
};


const checkAssetAssigned = async (req, res, next) => {
  const { uniqueId } = req.params;

  try {
    // Check if the employee with the given uniqueId exists
    const asset = await prisma.asset.findUnique({
      where: { uniqueId },
    });
    if (asset && asset.employeeId !== null) {
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
  checkAssetExists,
  checkEmplyeeWorking,
  checkAssetAssigned,
};
