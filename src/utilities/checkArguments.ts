export const checkArguments = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  if (!width || !height || !filename) {
    throw new Error('Missing Arguments');
  }
  if (width <= 0) {
    throw new Error('Invalid Width');
  }

  if (height <= 0) {
    throw new Error('Invalid Height');
  }
};
