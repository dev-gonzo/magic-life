import { GiBarbute } from "react-icons/gi";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const FooterCommander = ({playerId}: {playerId: number}) => {
  const { toogleShowCommander } = useGamePlayers();
  return (
    <>
      <GiBarbute color="white" size={30} onClick={() => toogleShowCommander(playerId)} />
    </>
  );
};
