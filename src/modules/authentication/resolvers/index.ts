import { AppError } from '@/common/utils';
import Authentication, { TAuthentication } from '../schema';
import { compare, genSalt, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

async function findByEmail(email: string) {
  const user = await Authentication.findOne({ email });
  return user;
}

async function createUser(data: TAuthentication) {
  if (!data.email) return new AppError('Email is required', 400);
  if (!data.password) return new AppError('Password is required', 400);
  const doesExist = await findByEmail(data.email);
  if (doesExist) return new AppError('Email already in use', 400);
  data.password = await hashPassword(data.password);
  const user = await Authentication.create(data);
  return user;
}

async function loginByEmail(email: string, password: string) {
  if (!email) return new AppError('Email is required', 400);
  if (!password) return new AppError('Password is required', 400);
  const user = await findByEmail(email);
  if (!user) return new AppError('User not found', 404);
  const isCorrect = await compare(password, user.password);
  if (!isCorrect) return new AppError('Invalid credentials', 400);
  const token = sign({ id: user._id }, process.env.AUTH_TOKEN_SECRET as string, {
    algorithm: 'HS512',
    expiresIn: '1h',
    issuer: 'rcmgt-bff',
  });
  return token;
}

async function hashPassword(raw: string) {
  const salt = await genSalt(10);
  return await hash(raw, salt);
}

export default {
  findByEmail,
  createUser,
  loginByEmail,
};
