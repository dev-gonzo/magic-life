import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const useCommanderDamage = (playerId: number) => {
  const { players, getPlayer, getConfigPlayer } = useGamePlayers();
  const player = getPlayer(playerId);

  const listCommander = players.map((item) => {
    const damageCommander = player?.commanderDamage?.filter(
      (item2) => item2?.player == item?.player
    );

    return {
      playerCommander: item?.player,
      damageCommander1: damageCommander?.find((item) => item?.commander == 1)
        ?.damage ?? 0,
      damageCommander2: damageCommander?.find((item) => item?.commander == 2)
        ?.damage ?? getConfigPlayer(item?.player)?.parther ? 0 : undefined,
    };
  });

  return { listCommander };
};
