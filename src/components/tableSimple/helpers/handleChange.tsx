import { TypeData } from "../@types";

export const handleChange = (
  value: TypeData | undefined | Array<TypeData | undefined | null> | null,
  fnData?: (
    value: TypeData | undefined | Array<TypeData | undefined | null> | null
  ) => TypeData | undefined | Array<TypeData | undefined | null> | null
) => {
  if (fnData) {
    return fnData(value);
  }
  return value;
};
