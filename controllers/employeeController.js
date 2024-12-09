const createEmployee = async (req, res) => {
    try {
      const {uniqueId,name,designation,dept,status} = req.body;

      const department = await getDeptByName(dept);
        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }
  
  
      const newEmployee = await addEmployee(uniqueId,name,designation,status,department.id);
  
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