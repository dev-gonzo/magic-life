import { Routes } from "../../@types";
import { PageAbout } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/about",
      element: PageAbout,
    },
  ];
};
