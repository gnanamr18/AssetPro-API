import prisma from "../db/prisma.js";

const returnAssetToCpny = async (uniqueId, employeeId) => {
  try {
    // Start a transaction to update Asset and create AssetHistory
    const returnedAsset = await prisma.$transaction(async (prisma) => {
      // Update the asset with the employee ID
      const asset = await prisma.asset.update({
        where: { uniqueId },
        data: {
          employeeId:null
        }, // Assign the employee to the asset
      });

      // Create the asset history
      await prisma.assetHistory.create({
        data: {
          uniqueId,
          employeeId:null,
          action: "returned", // Action type for issuing
          notes: `Asset returned to cpny`, // Add a meaningful note
        },
      });

      return asset; // Return the updated asset
    });

    return returnedAsset;
  } catch (error) {
    throw new Error(`Error issuing asset: ${error.message}`);
  }
};

export { returnAssetToCpny };
