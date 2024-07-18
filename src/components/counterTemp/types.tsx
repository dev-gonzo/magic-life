import { ReactNode } from "react";

export type Props = {
  icon: ReactNode;
  value: number;
  setValue: (value: "minus" | "add") => void;
};
