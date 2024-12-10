import prisma from "../db/prisma.js";

const addEmployee = async (
  uniqueId,
  name,
  designation,
  deptId,
  status,
  req,
  res,
  next
) => {
  try {
    // Check if the department exists
    const dept = await prisma.dept.findUnique({
      where: { id: deptId },
    });
    if (!dept) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Create a new employee
    const nEmployee = await prisma.employee.create({
      data: {
        uniqueId,
        name,
        designation,
        status,
        deptId,
      },
    });
    if (nEmployee) {
      return res.status(201).json(nEmployee);
    } // Return the created employee
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error adding employee", error: error.message });
  }
};

// Service to get department details by name
const getDeptByName = async (deptName) => {
  try {
    const department = await prisma.dept.findUnique({
      where: {
        dept: deptName,
      },
    });
    return department;
  } catch (error) {
    throw new Error(error.message);
  }
};

const resignEmployeeByUniqueId = async (uniqueId) => {
  try {
    // Find the employee by uniqueId and update their status to 'resigned'
    const updatedEmployee = await prisma.employee.update({
      where: { uniqueId: uniqueId }, // Match the employee using their uniqueId
      data: {
        status: "resigned", // Update the status to 'resigned'
      },
    });

    return updatedEmployee; // Return the updated employee details
  } catch (error) {
    throw new Error(error.message); // Throw an error if something goes wrong
  }
};

export { addEmployee, getDeptByName, resignEmployeeByUniqueId };
