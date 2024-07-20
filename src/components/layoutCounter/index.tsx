import { RollDice } from "../../@types";
import { getRegistredQtd } from "../../helpers/registredPlayers";
import { EightPlayers } from "./eightPlayers";
import { FivePlayers } from "./fivePlayers";
import { FourPlayers } from "./fourPlayers";
import { SevenPlayers } from "./sevenPlayers";
import { SixPlayers } from "./sixPlayers";
import { ThreePlayers } from "./threePlayers";
import { TwoPlayers } from "./twoPlayers";

export const LayoutCounter = ({ rollDice }: RollDice) => {
  const players = getRegistredQtd();

  const layout = [
    <></>,
    <TwoPlayers key={1} />,
    <ThreePlayers key={2} />,
    <FourPlayers key={3} rollDice={rollDice} />,
    <FivePlayers key={4} />,
    <SixPlayers key={5} />,
    <SevenPlayers key={6} />,
    <EightPlayers key={7} />,
  ];
  return <>{layout[players]}</>;
};
