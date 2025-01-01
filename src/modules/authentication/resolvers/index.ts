import { AppError } from '@/common/utils';
import Authentication, { TAuthentication } from '../schema';
import { genSalt, hash } from 'bcrypt';

export async function findByEmail(email: string) {
  const user = await Authentication.findOne({ email });
  return user;
}

export async function createUser(data: TAuthentication) {
  if (!data.email) return new AppError('Email is required', 400);
  if (!data.password) return new AppError('Password is required', 400);
  const doesExist = await findByEmail(data.email);
  if (doesExist) return new AppError('Email already in use', 400);
  data.password = await hashPassword(data.password);
  const user = await Authentication.create(data);
  return user;
}

export async function hashPassword(raw: string) {
  const salt = await genSalt(10);
  return await hash(raw, salt);
}

export default {
  findByEmail,
  createUser,
};
