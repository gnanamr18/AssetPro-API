import prisma from "../db/prisma.js";

const issueAssetToEmployee = async (uniqueId, employeeId) => {
  try {
    // Start a transaction to update Asset and create AssetHistory
    const updatedAsset = await prisma.$transaction(async (prisma) => {
      // Update the asset with the employee ID
      const asset = await prisma.asset.update({
        where: { uniqueId },
        data: {
          employeeId, // Assign the employee to the asset
        },
      });

      // Create the asset history
      const assetHistory = await prisma.assetHistory.create({
        data: {
          uniqueId,
          employeeId, // Link to the updated asset
          action: "assigned", // Action type for issuing
          notes: `Asset issued to employee ID: ${employeeId}`, // Add a meaningful note
        },
      });

      return asset; // Return the updated asset
    });
    return updatedAsset;
  } catch (error) {
    throw new Error(`Error issuing asset: ${error.message}`);
  }
};

const getALLIssueAssets = async (req, res) => {
  try {
    const dept = await prisma.assetHistory.findMany();
    return dept;
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { issueAssetToEmployee, getALLIssueAssets};
