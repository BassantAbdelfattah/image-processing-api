import path from 'path';
import express from 'express';
import { checkImageExist } from '../utilities/checkImageExist';
import { checkArguments } from '../utilities/checkArguments';
export async function inputValidator(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const width: number = Number(req.query.width as string) as number;
  const height: number = Number(req.query.height as string) as number;
  const filename: string = req.query.filename as string;
  const inputFile: string = path.resolve(
    __dirname,
    `../../assets/full/${filename}.jpg`
  ) as unknown as string;
  try {
    await checkArguments(filename, width, height);
  } catch (e) {
    return res.status(400).send({
      status: 400,
      errors: 'Invalid Arguments',
    });
  }

  try {
    await checkImageExist(inputFile);
  } catch (e) {
     return res.status(400).send({
      status: 400,
      errors: 'The image is not exist',
    });
  }
  next();

}
