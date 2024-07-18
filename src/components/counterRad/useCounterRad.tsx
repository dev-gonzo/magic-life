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
    if (player.rad > 0) {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      rad: player?.rad - 1,
    };
    updatePlayers(newInfoPlayer);
  }
  setShowTemp(playerId, "rad");
};

  return {
    addRad,
    subRad,
  };
};
