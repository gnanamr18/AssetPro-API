import prisma from "../db/prisma.js";

const addEmployee = async (uniqueId,name,designation,status,deptId) => {
  try {
    const newEmployee = await prisma.employee.create({
      data: {
        uniqueId,name,designation,status,deptId
      },
    });
    return newEmployee;
  } catch (error) {
    res.status(500).json(error.message);
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
            where: { uniqueId: uniqueId },  // Match the employee using their uniqueId
            data: { 
                status: 'resigned'  // Update the status to 'resigned'
            },
        });

        return updatedEmployee;  // Return the updated employee details
    } catch (error) {
        throw new Error(error.message);  // Throw an error if something goes wrong
    }
};



export {addEmployee,getDeptByName, resignEmployeeByUniqueId}