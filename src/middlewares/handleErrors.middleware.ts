import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppError.error';
import { ZodError } from 'zod';
import { JsonWebTokenError } from 'jsonwebtoken';

export class HandleErrors {
   static execute (error: Error, request: Request, response: Response, next: NextFunction) {
      if (error instanceof AppError) {
         return response.status(error.statusCode).json({ message: error.message });
      }

      if (error instanceof ZodError) {
         return response.status(422).json({ message: error });
      }

      if (error instanceof JsonWebTokenError) {
         return response.status(400).json({ message: error.message });
      }
      console.log(error);
      return response.status(500).json({ message: 'internal server error' });
   }
}
