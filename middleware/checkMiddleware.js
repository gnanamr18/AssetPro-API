import prisma from "../db/prisma.js"

const checkDeptExists = async (req, res, next) => {
  const { symbol } = req.body || req.params;

  try {
    const dept = await prisma.dept.findUnique({
      where: { symbol },
    });

    if (dept) {
      return res.status(400).json({
        message: "Dept already exists",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error checking department existence",
      error: error.message,
    });
  }
};

const checkEmployeeExists = async (req, res, next) => {
  const { uniqueId } = req.body || req.params;

  try {
    // Check if the employee with the given uniqueId exists
    const employee = await prisma.employee.findUnique({
      where: { uniqueId },
    });

    if (employee) {
      return res.status(400).json({
        message: "Employee already exists",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error checking employee existence",
      error: error.message,
    });
  }
};


export{ checkDeptExists,checkEmployeeExists };
