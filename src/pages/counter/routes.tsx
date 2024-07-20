import { Routes } from "../../@types";
import PageCounter from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/counter",
      element: PageCounter,
    },
    {
      path: "/",
      element: PageCounter,
    },
  ];
};
