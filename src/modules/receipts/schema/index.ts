import { Schema, Model, model } from 'mongoose';

export type TReceiptItem = {};
export type TReceipt = {
  totalAmount: number | null;
  storeName: string | null;
  items: TReceiptItem[];
  userId: Schema.Types.ObjectId;
};

export type TReceiptModel = Model<TReceipt>;

const schema = new Schema<TReceipt, TReceiptModel>(
  {
    items: { type: [Schema.Types.Mixed], required: true },
    storeName: { type: String },
    totalAmount: { type: Number },
    userId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const ReceiptModel = model<TReceipt, TReceiptModel>('Receipt', schema, 'Receipts');

export default ReceiptModel;
