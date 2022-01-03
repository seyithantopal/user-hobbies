import { Request, Response, NextFunction } from 'express';
import { SchemaOf } from 'yup';

const validate = <T> (schema: SchemaOf<T>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (err) {
      res.status(400).json(err);
    }
  };
};

export default validate;
