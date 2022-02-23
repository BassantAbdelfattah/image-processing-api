import express from 'express';
import path from 'path';
import { transformImage } from '../utilities/transformImage';
const resizeImage = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const width = Number(req.query.width as string);
  const height = Number(req.query.height as string);
  const filename: string = req.query.filename as string;

  const outputFile: string = path.resolve(
    __dirname,
    `../../assets/thumb/${filename}-${width}-${height}.jpg`
  ) as unknown as string;
  try {
    await transformImage(filename, width, height);
    res.sendFile(outputFile);
  } catch (e) {
    res.status(400).send({
      status: 400,
      errors: "can't resize the image",
    });
  }
};
export default resizeImage;
