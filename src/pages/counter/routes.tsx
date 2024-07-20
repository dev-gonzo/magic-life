import { Routes } from "../../@types";
import PageCounter from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "magic-life/counter",
      element: PageCounter,
    },
    {
      path: "magic-life/",
      element: PageCounter,
    },
  ];
};
