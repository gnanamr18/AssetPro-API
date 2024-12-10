
import prisma from "../db/prisma.js";

const  issueAssetToEmployee = async (uniqueId, employeeId) => {
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
        console.log(assetHistory, "assetHistory")

  
        return asset; // Return the updated asset
      });
      console.log(updatedAsset)
  
      return updatedAsset;
    } catch (error) {
      throw new Error(`Error issuing asset: ${error.message}`);
    }
  };

  export {issueAssetToEmployee}
  