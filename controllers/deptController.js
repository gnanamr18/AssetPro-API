import { makeAddDept, makeDeleteDept ,makeFindAsset,makeFindEmployee } from "../service/deptService.js";

const createDept = async (req, res) => {
  try {
    const { dept,symbol } = req.body;


    const newDept = await makeAddDept(dept,symbol);

    res.status(201).json(newDept);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDept = async (req, res) => {
  try {
    const { symbol } = req.params;

    const Dept = await makeDeleteDept(symbol);

    res.status(201).json(Dept);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findAsset = async (req, res) => {
  try {
    const { symbol } = req.params;

    const asset = await makeFindAsset(symbol);

    res.status(201).json(asset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findEmployee = async (req, res) => {
  try {
    const { symbol } = req.params;

    const employee = await makeFindEmployee(symbol);

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { createDept, deleteDept, findAsset,findEmployee };