import { InfoPlayer } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const useCitysBlessing = (playerId: number) => {
  const { updatePlayers, getPlayer, setShowTemp } = useGamePlayers();
  const player = getPlayer(playerId);

  const addEnergy = () => {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      energy: player?.energy + 1,
    };
    setShowTemp(playerId, "energy");
    updatePlayers(newInfoPlayer);
  };

  const subEnergy = () => {
    if (player.energy > 0) {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      energy: player?.energy - 1,
    };
    updatePlayers(newInfoPlayer);
    }
  setShowTemp(playerId, "energy");
  };

  return {
    addEnergy,
    subEnergy,
  };
};
