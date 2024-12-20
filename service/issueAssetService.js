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
const getALLIssueAssets = async () => {
  try {
    const dept = await prisma.assetHistory.findMany({
      orderBy: {
        actionDate: "desc", // Order by action date to get the sequence of events
      },
    });

    return dept; // Send response if `res` is available
  } catch (error) {
    return error
  }
};

export { issueAssetToEmployee, getALLIssueAssets };
