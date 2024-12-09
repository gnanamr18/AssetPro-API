const getAssetHistory = async (assetId) => {
    try {
      const history = await prisma.assetHistory.findMany({
        where: {
          assetId: assetId,
        },
        orderBy: {
          actionDate: 'asc',  // Order by action date to get the sequence of events
        },
        include: {
          employee: {
            select: {
              id: true,
              name: true,  // Only select the fields you need from the Employee
            },
          },
          asset: {
            select: {
              id: true,
              name: true,  // Only select the fields you need from the Asset
            },
          },
        },
      });
  
      return history;
    } catch (error) {
      console.error("Error fetching asset history:", error);
      throw new Error("Error fetching asset history");
    }
  };
  