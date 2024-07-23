
export const getStorageScreen = (): "table" | "display"=> {
  const storedValue = localStorage.getItem("screen");
  return storedValue === null
    ? "table"
    : (JSON.parse(storedValue) as "table" | "display");
};
