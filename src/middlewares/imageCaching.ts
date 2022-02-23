import { access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import express from 'express';
export async function imageCaching(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const width: number = Number(req.query.width as string) as number;
    const height: number = Number(req.query.height as string) as number;
    const filename: string = req.query.filename as string;
    const cacheFile: string = path.resolve(
      __dirname,
      `../../assets/thumb/${filename}-${width}-${height}.jpg`
    ) as unknown as string;

    await access(cacheFile, constants.R_OK | constants.W_OK);
   return res.sendFile(cacheFile);
  } catch (e) {
    next();
  }
}
