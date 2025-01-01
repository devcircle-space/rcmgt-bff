import { S3Client } from '@aws-sdk/client-s3';

const { CLOUD_AWS_ACCESS_KEY, CLOUD_AWS_SECRET_ACCESS_KEY, CLOUD_AWS_S3_BUCKET_REGION, CLOUD_AWS_S3_BUCKET_NAME } =
  process.env;

if (!CLOUD_AWS_ACCESS_KEY) throw new Error('AWS access key missing');
if (!CLOUD_AWS_SECRET_ACCESS_KEY) throw new Error('AWS secret key missing');
if (!CLOUD_AWS_S3_BUCKET_REGION) throw new Error('AWS bucket region missing');
if (!CLOUD_AWS_S3_BUCKET_NAME) throw new Error('AWS bucket name missing');

export const s3Config = {
  region: CLOUD_AWS_S3_BUCKET_REGION,
  accessKeyId: CLOUD_AWS_ACCESS_KEY,
  secretAccessKey: CLOUD_AWS_SECRET_ACCESS_KEY,
  bucket: CLOUD_AWS_S3_BUCKET_NAME,
};

const s3Client = new S3Client({
  region: s3Config.region,
  credentials: {
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey,
  },
  apiVersion: '2006-03-01',
});

export default s3Client;
