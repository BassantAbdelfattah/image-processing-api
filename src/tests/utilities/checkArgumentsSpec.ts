import { checkArguments } from '../../utilities/checkArguments';
describe('Check Arguments ', () => {
  it('Should not throw error when all arguments are valid ', async () => {
    const fileName: string = 'encenadaport' as string;
    const width: number = 300 as number;
    const height: number = 200 as number;

    expect(() => {
      checkArguments(fileName, width, height);
    }).not.toThrow();
  });

  it('Should throw error when width is negative ', async () => {
    const fileName: string = 'encenadaport' as string;
    const width: number = -300 as number;
    const height: number = 200 as number;
    let error;
    try {
      await checkArguments(fileName, width, height);
    } catch (e) {
      error = e;
    }
    const expectedError = new Error('Invalid Width');

    expect(error).toEqual(expectedError);
  });
});
