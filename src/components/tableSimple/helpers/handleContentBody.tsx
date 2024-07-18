import { TypeData } from "../@types";

export const handleContentBody = (
  value: TypeData | undefined | Array<TypeData | undefined | null> | null
) => {
  if (value === undefined || value === null) return null;

  if (typeof value === "number") {
    if (Number.isInteger(value)) {
      return value;
    }

    return Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  if (typeof value === "boolean") {
    return value ? "Sim" : "Não";
  }

  if (value instanceof Date) {
    return Intl.DateTimeFormat("pt-BR").format(value);
  }

  if (Array.isArray(value)) {
    const arrayValues: any[] = value
      ?.filter((item) => item != undefined && item != null)
      ?.map((item) => handleContentBody(item));

    return arrayValues?.length ? arrayValues.join(", ") : null;
  }

  if (typeof value === "object") {
    const arrayValues: any[] = Object.entries(value)
      .filter(([_, val]) => val !== undefined && val !== null)
      .map(([key, val]) => {
        return `${key}: ${val}`;
      });

    return arrayValues?.length ? arrayValues.join(", ") : null;
  }

  return value;
};
