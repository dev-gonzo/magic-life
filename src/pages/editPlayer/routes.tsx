import { Routes } from "../../@types";
import { PageEditPlayer } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "magic-life/edit-player",
      element: PageEditPlayer,
    },
  ];
};
