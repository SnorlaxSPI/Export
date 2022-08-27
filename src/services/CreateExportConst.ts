import { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../model';

const categories = [];

const category = new Category();

export const execute = (request:Request, response:Response) => {
  const { name, description } = request.body;  
  
  Object.assign(category, {
    id: uuidV4(),
    name,
    description,
  });

  categories.push(category);

  return response.status(201).json(category)
}
