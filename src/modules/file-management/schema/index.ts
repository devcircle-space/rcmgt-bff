import { Schema, model, Model } from 'mongoose';

export type TFile = {
  key: string;
  url: string;
  mimetype: string;
  size: number;
  uploadedBy: Schema.Types.ObjectId;
};

export type TFileModel = Model<TFile>;

const FileSchema = new Schema<TFile>(
  {
    key: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    mimetype: { type: String, required: true },
    size: { type: Number, required: true },
    uploadedBy: { type: Schema.Types.ObjectId, ref: 'Authentication', required: true },
  },
  { timestamps: true }
);

const FileModel = model<TFile, TFileModel>('File', FileSchema, 'Files');

export default FileModel;
