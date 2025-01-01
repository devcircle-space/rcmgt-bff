import { Schema, model, Model } from 'mongoose';

export type TAuthentication = {
  email: string;
  password: string;
};

export type TAuthenticationModel = Model<TAuthentication>;

const AuthenticationSchema = new Schema<TAuthentication, TAuthenticationModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Authentication = model<TAuthentication, TAuthenticationModel>(
  'Authentication',
  AuthenticationSchema,
  'Authentication'
);

export default Authentication;
