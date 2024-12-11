import { issueAssetToEmployee } from "../service/issueAssetService.js";


const issueAsset = async (req, res) => {
    try {
      const { uniqueId } = req.params;

      const { employeeId } = req.body;
      const assign = await issueAssetToEmployee(uniqueId, employeeId);
  
      res.status(201).json(assign);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export {issueAsset}