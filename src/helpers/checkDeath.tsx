
import { InfoPlayer } from "../@types";
import { checkDeathCommander } from "./checkDeathCommander";

export const checkDeath = (playerNumber: number, actionDeath: () => void) => {
  const sessionPlayers: null | undefined | string =
    sessionStorage.getItem("players");

  if (sessionPlayers && sessionPlayers !== null) {
    const infoPlayers: InfoPlayer[] = JSON.parse(sessionPlayers);

    const indexPlayer = infoPlayers?.findIndex(
      (item) => item?.player == playerNumber
    );

    const player = infoPlayers[indexPlayer];

    if (
      player?.life === 0 ||
      player?.infect == 10 ||
      checkDeathCommander(player?.commanderDamage)
    ) {
      actionDeath();
    }
  }
};
