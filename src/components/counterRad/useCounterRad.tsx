import { InfoPlayer } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const useCounterRad = (playerId: number) => {
  const { updatePlayers, getPlayer, setShowTemp } = useGamePlayers();
  const player = getPlayer(playerId);

  const addRad = () => {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      rad: player?.rad + 1,
    };
    setShowTemp(playerId, "rad");
    updatePlayers(newInfoPlayer);
  };

  const subRad = () => {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      rad: player?.rad - 1,
    };
    setShowTemp(playerId, "rad");
    updatePlayers(newInfoPlayer);
  };

  return {
    addRad,
    subRad,
  };
};
