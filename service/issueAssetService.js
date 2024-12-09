
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
        await prisma.assetHistory.create({
          data: {
            assetId: asset.id, // Link to the updated asset
            action: "issued", // Action type for issuing
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

  export {issueAssetToEmployee}
  