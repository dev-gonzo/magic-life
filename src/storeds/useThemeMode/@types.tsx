import { ReactNode } from "react";
import { ConfigPlayer, InfoPlayer, Layer } from "../../@types";

export type Props = {
  themeMode: "light" | "dark";
  fontSize: number;
  toggleTheme: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
};

export type PropsInfoPlayers = {
  players: InfoPlayer[];
  screen: "table" | "display";
  configPlayers: ConfigPlayer[];
  showTemp?: {
    layer: Layer;
    icon: ReactNode;
    playerId: number;
    timestamp: number;
  };

  toggleScreen: () => void;

  saveConfigPlayers: (configPlayer: ConfigPlayer) => void;
  getConfigPlayer: (playerId: number) => ConfigPlayer;
  resetConfigPlayers: () => void;

  initGame: (playersNumber?: number) => void;
  updatePlayers: (infoPlayer: InfoPlayer) => void;
  getPlayer: (playerId: number) => InfoPlayer;

  addLife: (playerId: number) => void;
  subLife: (playerId: number) => void;

  addCommanderDamage: (
    playerId: number,
    playerCommander: number,
    commanderId: number
  ) => void;
  subCommanderDamage: (
    playerId: number,
    playerCommander: number,
    commanderId: number
  ) => void;

  setMonarch: (playerId: number) => void;
  setSorted: (playerId: number) => void;
  toogleShowCommander: (playerId: number) => void;
  setShowTemp: (playerId: number, layer: Layer) => void;
  cleanShowTemp: () => void;
};
