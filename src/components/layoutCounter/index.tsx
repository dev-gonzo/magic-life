import { RollDice } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { TwoPlayers } from "./twoPlayers";
import { ThreePlayers } from "./threePlayers";
import { FourPlayers } from "./fourPlayers";
import { FivePlayers } from "./fivePlayers";
import { SixPlayers } from "./sixPlayers";

export const LayoutCounter = ({ rollDice }: RollDice) => {
  const { players } = useGamePlayers();

  const layout = [
    <></>, //player 0 = 0
    <></>, //player 1 = 1
    <TwoPlayers key={1} rollDice={rollDice} />,
    <ThreePlayers key={2} rollDice={rollDice}/>,
    <FourPlayers key={3} rollDice={rollDice} />,
    <FivePlayers key={4} rollDice={rollDice} />,
    <SixPlayers key={5} rollDice={rollDice} />,
  ];
  return <>{layout[players?.length]}</>;
};
