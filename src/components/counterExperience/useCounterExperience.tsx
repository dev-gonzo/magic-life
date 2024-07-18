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
    if (player.experience > 0) {
    const newInfoPlayer: InfoPlayer = {
      ...player,
      experience: player?.experience - 1,
    };
    updatePlayers(newInfoPlayer);
  }
  setShowTemp(playerId, "experience");
  };

  return {
    addExperience,
    subExperience,
  };
};
