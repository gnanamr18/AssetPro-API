import prisma from "../db/prisma.js";

const makeCreateAsset = async (uniqueId,name,deptId,status) => {
  try {
    const newDept = await prisma.asset.create({
      data: {
        uniqueId,
        name,
        deptId,
        status
      },
    });
    return newDept;
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const makeScrapAsset = async (uniqueId) => {
    try {
        // Find the employee by uniqueId and update their status to 'resigned'
        const updatedAsset = await prisma.asset.update({
            where: { uniqueId: uniqueId },  // Match the employee using their uniqueId
            data: { 
                status: 'obsolete'  // Update the status to 'resigned'
            },
        });

        return updatedAsset;  // Return the updated employee details
    } catch (error) {
        throw new Error(error.message);  // Throw an error if something goes wrong
    }
};


export{makeCreateAsset,makeScrapAsset}