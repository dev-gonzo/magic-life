import { Routes } from "../../@types";
import { PageClearPlayers } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "magic-life/clear-config",
      element: PageClearPlayers,
    },
  ];
};
