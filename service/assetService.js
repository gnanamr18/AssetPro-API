import prisma from "../db/prisma.js";

const makeCreateAsset = async (uniqueId, name, deptId, status) => {
  try {
    // Start a transaction to create Asset and AssetHistory
    const newAsset = await prisma.$transaction(async (prisma) => {
      // Create the asset
      const asset = await prisma.asset.create({
        data: {
          uniqueId,
          name,
          deptId,
          status,
        },
      });

      // Create the asset history
      await prisma.assetHistory.create({
        data: {
          uniqueId: asset.uniqueId, // Link to the created asset
          action: "purchased", // Default action for new asset
          notes: "New asset created", // Optional note
        },
      });
      return asset
    });

    return newAsset;
  } catch (error) {
    throw new Error(`Error creating asset: ${error.message}`);
  }
};


const makeScrapAsset = async (uniqueId,req,res) => {
  console.log(uniqueId,'service')
  try {
    // Use a transaction to ensure atomicity
    const updatedAsset = await prisma.$transaction(async (prisma) => {
      // Update the asset's status to 'obsolete'
      const asset = await prisma.asset.update({
        where: { uniqueId },
        data: { 
          status: 'obsolete', 
        },
      });
      // Add an entry in the AssetHistory table
      await prisma.assetHistory.create({
        data: {
          uniqueId: asset.uniqueId,       // Link the history to the asset
          action: 'obsolete',     // Mark the action as 'obsolete'
          notes: 'Asset scrapped', // Optional note
        },
      });

      return asset
    });

    return updatedAsset
  } catch (error) {
    throw new Error(`Error scrapping asset: ${error.message}`);
  }
};



export{makeCreateAsset,makeScrapAsset}