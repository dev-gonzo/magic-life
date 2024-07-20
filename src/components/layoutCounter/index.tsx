import { RollDice } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { FourPlayers } from "./fourPlayers";
import { SixPlayers } from "./sixPlayers";

export const LayoutCounter = ({ rollDice }: RollDice) => {
  const { players } = useGamePlayers();

  const layout = [
    <></>,
    <></>,
    <></>,
    <></>,
    <FourPlayers key={3} rollDice={rollDice} />,
    <SixPlayers key={5} rollDice={rollDice} />,
    <></>,
  ];
  //return <>{layout[players?.length]}</>;
  return <SixPlayers key={4} rollDice={rollDice} />
};
