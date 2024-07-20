export const defineSize = (playersNumber: number) => {
  if (playersNumber >= 5 || playersNumber == 3) {
    return "small";
  }

  if (playersNumber == 4) {
    return "normal";
  }

  return "extend";
};
