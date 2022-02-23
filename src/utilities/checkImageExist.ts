import { access } from 'fs/promises';
import { constants } from 'fs';
export const checkImageExist = async (inputFile: string): Promise<void> => {
  try {
    await access(inputFile, constants.R_OK | constants.W_OK);
  } catch (error) {
    throw new Error('The image is not exist');
  }
};
