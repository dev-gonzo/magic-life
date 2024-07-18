import { TypeData } from "../@types";

export const handleMask = (
  value: TypeData | undefined | Array<TypeData | undefined | null> | null,
  fnMask?: (
    value: string | number | undefined | null
  ) => TypeData | undefined | Array<TypeData | undefined | null> | null
) => {
  if (fnMask && (typeof value === "string" || typeof value === "number")) {
    return fnMask(value);
  }
  return value;
};
