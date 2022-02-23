import path from 'path';
import sharp from 'sharp';

export const transformImage = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
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
  } catch (e) {
    throw new Error("can't resize the image");
  }
};
