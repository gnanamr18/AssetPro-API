// import Joi from 'joi';
import JoiBase from "joi";
import JoiDate from "@hapi/joi-date";

const Joi = JoiBase.extend(JoiDate);


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
  

  export {
    deptValidation
  };