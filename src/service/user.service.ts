import { UserModel, IUser } from '../model/user.model';

export const createUser = async (data: Partial<IUser>) => {
  return await UserModel.create(data);
};

export const getAllUsers = async () => {
  return await UserModel.find();
};

export const getUserById = async (id: string) => {
  return await UserModel.findById(id);
};

export const updateUser = async (id: string, data: Partial<IUser>) => {
  return await UserModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};
