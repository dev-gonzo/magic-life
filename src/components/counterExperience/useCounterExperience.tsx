import { InfoPlayer } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const useCounterExperience = (playerId: number) => {
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
    const newInfoPlayer: InfoPlayer = {
      ...player,
      energy: player?.energy - 1,
    };
    setShowTemp(playerId, "energy");
    updatePlayers(newInfoPlayer);
  };

  return {
    addEnergy,
    subEnergy,
  };
};
