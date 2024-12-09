import { makeCreateAsset,makeScrapAsset } from "../service/assetService";

const createAsset = async (req, res) => {
    try {
      const { uniqueId,name,deptId,status } = req.body;
  
  
      const newAsset = await makeCreateAsset(uniqueId,name,deptId,status);
  
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