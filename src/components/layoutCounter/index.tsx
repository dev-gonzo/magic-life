import { RollDice } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { FourPlayers } from "./fourPlayers";
import { SixPlayers } from "./sixPlayers";

export const LayoutCounter = ({ rollDice }: RollDice) => {
  const { players } = useGamePlayers();

  const layout = [
    <></>, //player 0 = 0
    <></>, //player 1 = 1
    <></>, //player 2 = 2
    <></>, //player 3 = 3
    <FourPlayers key={3} rollDice={rollDice} />,
    <></>,
    <SixPlayers key={5} rollDice={rollDice} />,
  ];
  return <>{layout[players?.length]}</>;
};
