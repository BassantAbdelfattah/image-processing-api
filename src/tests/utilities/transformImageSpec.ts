import { transformImage } from '../../utilities/transformImage';

describe('Check TransformImage function ', () => {
  it('Should not throw error when resizing image ', async () => {
    const fileName: string = 'encenadaport' as string;
    const width: number = 300 as number;
    const height: number = 200 as number;
    expect(() => {
      transformImage(fileName, width, height);
    }).not.toThrow();
  });
});
