import { Request, Response } from 'express';
import * as userService from '../service/user.service';

export const getUsers = async (_req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' });
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user', details: error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const updated = await userService.updateUser(req.params.id, req.body);
  updated ? res.status(200).json(updated) : res.status(404).json({ error: 'User not found' });
};

export const deleteUser = async (req: Request, res: Response) => {
  const deleted = await userService.deleteUser(req.params.id);
  deleted ? res.status(200).json({ message: 'Deleted' }) : res.status(404).json({ error: 'User not found' });
};
