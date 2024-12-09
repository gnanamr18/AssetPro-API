

const issueAsset = async (req, res) => {
    try {
      const { uniqueId } = req.params;

      const { employeeId } = req.body;

  
      const scrap = await makeIssueAsset(uniqueId, employeeId);
  
      res.status(201).json(scrap);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export {issueAsset}