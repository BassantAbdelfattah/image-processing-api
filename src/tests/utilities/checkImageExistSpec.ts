import path from 'path';
import { checkImageExist } from '../../utilities/checkImageExist';

describe('Check Image Exist ', () => {
  it('Should not throw error when image exist ', async () => {
    const fileName: string = 'encenadaport' as string;
    const File: string = path.resolve(
      __dirname,
      `../../../assets/full/${fileName}.jpg`
    ) as unknown as string;
    expect(() => {
      checkImageExist(File);
    }).not.toThrow();
  });
});
