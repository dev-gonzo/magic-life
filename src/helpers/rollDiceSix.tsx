export const RollDiceSix = (value?: number) => {
  return Math.floor(Math.random() * (value ?? 6)) + 1;
};
