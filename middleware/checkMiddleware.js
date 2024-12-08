
const checkDeptExists = async (req, res, next) => {
    const { symbol } = req.body;
    const bus = await Dept.findOne({ symbol });
    if (bus) {
      return res.status(400).json({
        message: "Dept already Exists",
      });
    } else {
      next();
    }
  };

  export {checkDeptExists}