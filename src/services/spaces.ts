import AWS from "aws-sdk";

const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint(process.env.DO_SPACES_REGION as string),
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
});

const BUCKET = process.env.DO_SPACES_BUCKET as string;
const ROOT_FOLDER = process.env.DO_SPACES_FOLDER || "default";

export const uploadFile = ({ name, content, mime }: any = {}) => {
  return s3
    .upload({
      Bucket: BUCKET,
      Key: `${ROOT_FOLDER}/${name}`,
      Body: content,
      ACL: "public-read",
      ContentType: mime,
    })
    .promise()
    .then((data) => data.Location);
};

export const deleteFiles = (urls: string[]) => {
  return s3
    .deleteObjects({
      Bucket: BUCKET,
      Delete: {
        Objects: urls
          .map((url) => new URL(url).pathname.slice(1))
          .filter((path) => path.startsWith(ROOT_FOLDER + "/"))
          .map((path) => ({ Key: path })),
      },
    })
    .promise();
};

export const getBase64Data = (base64: string) => {
  const [meta, content] = base64.split(";base64,");
  const mime = meta.split(":")[1];
  const type = mime.split("/")[1];
  const buffer = Buffer.from(content, "base64");
  return { mime, type, content, buffer };
};
