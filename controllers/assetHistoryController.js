import prisma from "../db/prisma.js";

const getAssetHistory = async (req,res,next) => {
  const uniqueId = req?.params.uniqueId
    try {
      const history = await prisma.assetHistory.findMany({
        where: {
          uniqueId: uniqueId, // Direct match for the uniqueId field
        },
        orderBy: {
          actionDate: 'asc',  // Order by action date to get the sequence of events
        },
        include: {
          // employee: {
          //   select: {
          //     id: true,
          //     name: true,  // Only select the fields you need from the Employee
          //   },
          // },
          asset: {
            select: {
              id: true,
              name: true,  // Only select the fields you need from the Asset
            },
          },
        },
      });
      res.status(200).json(history);
    } catch (error) {
      console.error("Error fetching asset history:", error);
      throw new Error("Error fetching asset history");
    }
  };

  export{getAssetHistory}
  