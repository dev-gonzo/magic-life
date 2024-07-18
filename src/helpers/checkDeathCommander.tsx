import { DamageCommander } from "../@types";

export const checkDeathCommander = (damanges: DamageCommander[]) => {
  return damanges?.filter((item) => item?.damage >= 21).length ? true : false;
};
