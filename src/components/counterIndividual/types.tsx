import { Direction } from "../../@types";

export type Props = {
  direction: Direction;
  inverse?: boolean;
  player: number;
  outerConter?: "left" | "right";
};
