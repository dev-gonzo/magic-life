import { InfoPlayer } from "../@types";

export const getStoragePlayer = (): InfoPlayer[] => {
  const storedValue = localStorage.getItem("players");
  return storedValue === null
    ? ([] as InfoPlayer[])
    : (JSON.parse(storedValue) as InfoPlayer[]);
};
