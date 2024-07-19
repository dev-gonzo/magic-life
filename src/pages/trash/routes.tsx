import { Routes } from "../../@types";
import { PageClearPlayers } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/clear-config",
      element: PageClearPlayers,
    },
  ];
};
