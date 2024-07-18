import { InfoPlayer } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const useCounterExperience = (playerId: number) => {
  const { updatePlayers, getPlayer, setShowTemp } = useGamePlayers();
  const player = getPlayer(playerId);

  const addExperience = () => {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      experience: player?.experience + 1,
    };
    setShowTemp(playerId, "experience");
    updatePlayers(newInfoPlayer);
  };

  const subExperience = () => {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      experience: player?.experience - 1,
    };
    setShowTemp(playerId, "experience");
    updatePlayers(newInfoPlayer);
  };

  return {
    addExperience,
    subExperience,
  };
};
