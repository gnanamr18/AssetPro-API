import Joi from 'joi';
// import JoiBase from "joi";
// import JoiDate from "@hapi/joi-date";



const deptValidation = (req, res, next) => {
    const schema = Joi.object({
      dept: Joi.string().required(),
      symbol: Joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    } else {
      next();
    }
  };

  const employeeValidation = (req, res, next) => {
      const schema = Joi.object({
          uniqueId: Joi.string().required().messages({
              "any.required": "Unique ID is required.",
              "string.empty": "Unique ID cannot be empty.",
          }),
          name: Joi.string().required().messages({
              "any.required": "Name is required.",
              "string.empty": "Name cannot be empty.",
          }),
          deptId: Joi.number().integer().required().messages({
              "any.required": "Department ID is required.",
              "number.base": "Department ID must be a number.",
              "number.integer": "Department ID must be an integer.",
          }),
          designation: Joi.string().required().messages({
              "any.required": "Designation is required.",
              "string.empty": "Designation cannot be empty.",
          }),
          status: Joi.string()
              .valid("working", "resigned", "obsolete")
              .default("working")
              .messages({
                  "any.only": "Status must be one of: working, resigned, obsolete.",
              }),
          createdAt: Joi.date().optional().messages({
              "date.base": "Created At must be a valid date.",
          }),
          updatedAt: Joi.date().optional().messages({
              "date.base": "Updated At must be a valid date.",
          }),
      });
  
      const { error } = schema.validate(req.body);
  
      if (error) {
          return res.status(400).json({
              message: error.message,
          });
      }
  
      next();
  };
  
  
  

  export {
    deptValidation,employeeValidation
  };