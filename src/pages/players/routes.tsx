import { Routes } from "../../@types";
import PagePlayers from "./page";


export const routes = (): Routes[] => {
  return [
    {
      path: "/players",
      element: PagePlayers,
    },
  ];
};
