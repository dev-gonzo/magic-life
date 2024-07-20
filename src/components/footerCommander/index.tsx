import { GiBarbute } from "react-icons/gi";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { configCounter } from "../../data/configCounter";
import { defineSize } from "../../helpers/defineSize";

export const FooterCommander = ({ playerId }: { playerId: number }) => {
  const { toogleShowCommander, players } = useGamePlayers();
  return (
    <>
      <GiBarbute
        color="white"
        size={configCounter.iconButton[defineSize(players.length)]}
        onClick={() => toogleShowCommander(playerId)}
        style={{marginBottom: 1}}
      />
    </>
  );
};
