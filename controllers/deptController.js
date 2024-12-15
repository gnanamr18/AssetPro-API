import { makeAddDept, makeDeleteDept ,makeFindAsset,makeFindEmployee, makeGetDept } from "../service/deptService.js";

const createDept = async (req, res) => {
  try {
    const { dept,deptSymbol } = req.body;
    const newDept = await makeAddDept(dept,deptSymbol);
    res.status(201).json(newDept);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDept = async (req, res, next) => {
  try {
    const { symbol } = req.params;
    const Dept = await makeDeleteDept(symbol);
    res.status(201).json(Dept);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDept = async (req, res) => {
  try {

    const Dept = await makeGetDept();

    res.status(200).json(Dept);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findAsset = async (req, res) => {
  try {
    const { deptSymbol } = req.params;
    const assets = await makeFindAsset(deptSymbol);

    res.status(200).json({
      message: "Assets found successfully",
      data: assets,
    });  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findEmployee = async (req, res,next) => {
  try {
    const { deptSymbol } = req.params;

    const employee = await makeFindEmployee(deptSymbol);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { createDept, deleteDept, findAsset,findEmployee,getDept };