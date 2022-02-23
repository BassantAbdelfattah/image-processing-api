import express from 'express';
import sharp from 'sharp';
import path from 'path';
const resizeImage = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const width = Number(req.query.width as string);
  const height = Number(req.query.height as string);
  const filename: string = req.query.filename as string;
  const inputFile: string = path.resolve(
    __dirname,
    `../../assets/full/${filename}.jpg`
  ) as unknown as string;
  const outputFile: string = path.resolve(
    __dirname,
    `../../assets/thumb/${filename}-${width}-${height}.jpg`
  ) as unknown as string;
  try {
    await sharp(inputFile).resize(width, height).toFile(outputFile);
    res.sendFile(outputFile);
  } catch (e) {
    console.log(e);
  }
};
export default resizeImage;
