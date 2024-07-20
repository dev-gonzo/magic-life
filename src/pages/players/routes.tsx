import { Routes } from "../../@types";
import PagePlayers from "./page";


export const routes = (): Routes[] => {
  return [
    {
      path: "magic-life/players",
      element: PagePlayers,
    },
  ];
};
