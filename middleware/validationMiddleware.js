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
          uniqueId: Joi.string().required(),
          name: Joi.string().required(),
          deptId: Joi.number().integer().required(),
          designation: Joi.string().required(),
          status: Joi.string().valid("working", "resigned", "obsolete").default("working")      
      });
  
      const { error } = schema.validate(req.body);
  
      if (error) {
          return res.status(400).json({
              message: error.message,
          });
      }
  
      next();
  };
  
  const assetValidation = (req, res, next) => {
    const schema = Joi.object({
        uniqueId: Joi.string().required(),
        name: Joi.string().required(),
        deptId: Joi.number().integer().required(),
        status: Joi.string()
            .valid("working", "resigned", "obsolete")
            .default("working"),
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
    deptValidation,employeeValidation, assetValidation
  };