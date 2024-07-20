import { RollDice } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { FourPlayers } from "./fourPlayers";

export const LayoutCounter = ({ rollDice }: RollDice) => {
  const { players } = useGamePlayers();

  const layout = [
    <></>,
    <></>,
    <></>,
    <></>,
    <FourPlayers key={3} rollDice={rollDice} />,
    <></>,
    <></>,
  ];
  return <>{layout[players?.length]}</>;
};
