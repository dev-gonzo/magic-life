import { Routes } from "../../@types";
import { PageEditPlayer } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/edit-player",
      element: PageEditPlayer,
    },
  ];
};
