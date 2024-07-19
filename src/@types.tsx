import { SxProps, Theme } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type StyleSx = SxProps<Theme>;

export type Routes = {
  path: string;
  element: React.ElementType;
};

export type InfoPlayer = {
  player: number;
  life: number;
  commanderDamage: DamageCommander[];
  commanderTax: number;
  infect: number;
  rad: number;
  energy: number;
  experience: number;
  citysBlessing: boolean;
  monarch: boolean;
  viewCommanderDamage: boolean;
  loses: boolean;
  immmortal: boolean;
};

export type ConfigPlayer = {
  player: number;
  playerName: string;
  parther: boolean;
  color?: ColorMagic;
  bgMagic?: string;
};

export type ColorMagic =
  | "plains"
  | "island"
  | "swamp"
  | "mountain"
  | "forest"
  | "waste";

export type DamageCommander = {
  player: number;
  commander: number;
  damage: number;
};

export type Layers = {
  title?: string;
  main: ReactNode;
  footer: ReactNode;
  sideLeft: ReactNode;
  sideRight: ReactNode;
};

export type Position = "horizontal" | "vertical";

export type DirectionSide = "left" | "right";

export type Layer =
  | "life"
  | "energy"
  | "infect"
  | "experience"
  | "commanderTax"
  | "rad"
  | "citysBlessing"
  | "monarch";

export type Counter = {
  playerNumber: number;
  addLife: () => void;
  minusLife: () => void;
  pressAdd: () => void;
  dropAdd: () => void;
  pressMinus: () => void;
  dropMinus: () => void;
  layerView: Layers;
  setLayerView: Dispatch<SetStateAction<Layers>>;
  addCommanderDamage: (playerId: number, commanderId: number) => void;
  minusCommanderDamage: (playerId: number, commanderId: number) => void;
  deathByCommander: boolean;
  playerDeath: boolean;
  revivePlayer: () => void;
};
