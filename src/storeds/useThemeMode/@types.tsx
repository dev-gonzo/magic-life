import { ReactNode } from "react";
import { InfoPlayer, Layer } from "../../@types";

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
    layer: Layer;
    icon: ReactNode;
    playerId: number;
    timestamp: number;
  };

  initGame: (playersNumber?: number) => void;
  updatePlayers: (infoPlayer: InfoPlayer) => void;
  getPlayer: (playerId: number) => InfoPlayer;

  addLife: (playerId: number) => void;
  subLife: (playerId: number) => void;

  addCommanderDamage: (playerId: number, commanderId: number) => void;
  subCommanderDamage: (playerId: number, commanderId: number) => void;

  setMonarch: (playerId: number) => void;

  setShowTemp: (playerId: number, layer: Layer) => void;
  cleanShowTemp: () => void;
};
