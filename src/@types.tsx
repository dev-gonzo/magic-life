import { SxProps, Theme } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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
  experence: number;
  citysBlessing: boolean;
  monarch: boolean;
};

export type DamageCommander = {
  player: number;
  commander: number;
  damage: number;
};

export type Layers = "life" | "commanderDamage";

export type Direction = "horizontal" | "vertical";

export type DirectionSide = "left" | "right";

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
