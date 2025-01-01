import ReceiptModel from '../schema';

async function getAllReceipts(userId: string, limit = 10, offset = 0) {
  return await ReceiptModel.find({ userId }).limit(limit).skip(offset);
}

async function createReceipt(userId: string) {}

async function getReceiptById(userId: string, receiptId: string) {
  return await ReceiptModel.findOne({ userId, _id: receiptId });
}

async function updateReceiptById(userId: string, receiptId: string) {}

async function deleteReceiptById(userId: string, receiptId: string) {}

export default {
  getAllReceipts,
  getReceiptById,
  createReceipt,
  updateReceiptById,
  deleteReceiptById,
};
