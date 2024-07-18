import { Counter, Direction } from "../../@types";

export type Props = {
  counter: Counter;
  direction: Direction;
  inverse?: boolean;
  playerNumber: number;
  outerConter?: "left" | "right";
};
