import { ConfigPlayer } from "../@types";

export const getStorageConfigPlayer = (): ConfigPlayer[] => {
  const storedValue = localStorage.getItem("configPlayers");
  return storedValue === null
    ? ([] as ConfigPlayer[])
    : (JSON.parse(storedValue) as ConfigPlayer[]);
};
