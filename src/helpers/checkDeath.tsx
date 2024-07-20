import { InfoPlayer } from "../@types";
import { checkDeathCommander } from "./checkDeathCommander";

export const checkDeath = (playerNumber: number, actionDeath: () => void) => {
  const players: null | undefined | string = localStorage.getItem("players");

  if (players && players !== null) {
    const infoPlayers: InfoPlayer[] = JSON.parse(players);

    const indexPlayer = infoPlayers?.findIndex(
      (item) => item?.player == playerNumber
    );

    const player = infoPlayers[indexPlayer];

    if (
      !player?.loses &&
      !player?.immmortal &&
      (player?.life === 0 ||
        player?.infect == 10 ||
        checkDeathCommander(player?.commanderDamage))
    ) {
      actionDeath();
    }
  }
};
