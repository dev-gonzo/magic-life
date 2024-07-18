import { ReactNode } from "react";
import { InfoPlayer } from "../../@types";

export type Props = {
  themeMode: "light" | "dark";
  fontSize: number;
  toggleTheme: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
};

export type PropsInfoPlayers = {
  players: InfoPlayer[];
  showTemp?: {
    title: string;
    icon: ReactNode;
    playerId: number;
    timestamp: number;
  };

  initGame: (playersNumber?: number) => void;
  updatePlayers: (infoPlayer: InfoPlayer) => void;
  getPlayer: (playerId: number) => InfoPlayer;
  setShowTemp: () => void;
  closShowTemp: () => void;
};
