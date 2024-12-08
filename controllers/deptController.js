import { addDept } from "../service/deptService.js";

const createDept = async (req, res) => {
  try {
    const { dept,symbol } = req.body;


    const Dept = await addDept(dept,symbol);

    res.status(200).json({
      dept_id: Dept.id,
      deptSymbol: Dept.symbol,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createDept };