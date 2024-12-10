import {addEmployee,getDeptByName,resignEmployeeByUniqueId} from "../service/employeeService.js"

const createEmployee = async (req, res) => {
    try {
      const {uniqueId,name,designation,deptId,status} = req.body;  
      const newEmployee = await addEmployee(uniqueId,name,designation,deptId, status,req,res);
  
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  const resignEmployee = async (req, res) => {
    try {
      const { uniqueId } = req.params;
  
      const employee = await resignEmployeeByUniqueId(uniqueId);
  
      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export{createEmployee, resignEmployee}