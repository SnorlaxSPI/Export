import { Request, Response } from 'express';

const categories = [];

export const execute = (request:Request, response:Response) => {
  const { name, description } = request.body;

  const category = {
    name,
    description,
  }

  categories.push(category);

  return response.status(201).json(category)
}
