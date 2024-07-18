import { InfoPlayer } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const useCounterCommanderTax = (playerId: number) => {
  const { updatePlayers, getPlayer, setShowTemp } = useGamePlayers();
  const player = getPlayer(playerId);

  const addCommanderTax = () => {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      commanderTax: player?.commanderTax + 2,
    };
    setShowTemp(playerId, "commanderTax");
    updatePlayers(newInfoPlayer);
  };

  const subCommanderTax = () => {
    if (player.commanderTax > 0) {
      const newInfoPlayer: InfoPlayer = {
        ...player,
        commanderTax: player?.commanderTax - 2,
      };
      updatePlayers(newInfoPlayer);
    }
    setShowTemp(playerId, "commanderTax");
  };

  return {
    addCommanderTax,
    subCommanderTax,
  };
};
