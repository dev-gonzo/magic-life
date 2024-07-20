import { Routes } from "../../@types";
import { PageAbout } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/magic-life/about",
      element: PageAbout,
    },
  ];
};
