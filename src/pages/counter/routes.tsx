import { Routes } from "../../@types";
import PageCounter from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/counter",
      element: PageCounter,
    },
    {
      path: "magic-life/",
      element: PageCounter,
    },
  ];
};
