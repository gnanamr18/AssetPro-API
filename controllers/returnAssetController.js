import { returnAssetToCpny } from "../service/returnAssetService.js";




const returnAsset = async (req, res) => {
    try {
      const { uniqueId } = req.params;


  
      const scrap = await returnAssetToCpny(uniqueId);
  
      res.status(201).json(scrap);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export {returnAsset}