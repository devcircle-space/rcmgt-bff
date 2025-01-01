import { AppError } from '@/common/utils';
import FileModel from '../schema';

async function initUpload() {}

async function completeUpload() {}

async function getFiles(userId: string, limit = 10, offset = 0) {
  const files = await FileModel.find({ uploadedBy: userId }, null, {
    sort: {
      createdAt: -1,
    },
    limit,
    skip: offset,
  });
  const count = await FileModel.countDocuments({ uploadedBy: userId });
  return { files, count };
}

async function getFileById(id: string) {
  return await FileModel.findById(id);
}

async function deleteFileById() {}

export default {
  initUpload,
  completeUpload,
  getFiles,
  getFileById,
  deleteFileById,
};
