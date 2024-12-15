import { makeCreateAsset,makeScrapAsset } from "../service/assetService.js";

const createAsset = async (req, res) => {
    try {
      const { uniqueId,name,deptSymbol,status } = req.body;

  
      const newAsset = await makeCreateAsset(uniqueId,name,deptSymbol,status);
  
      res.status(201).json(newAsset);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  const scrapAsset = async (req, res) => {
    try {
      const { uniqueId } = req.params;
      const scrap = await makeScrapAsset(uniqueId);
  
      res.status(201).json(scrap);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

 


  export{createAsset, scrapAsset}