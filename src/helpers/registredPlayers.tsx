import { InfoPlayer } from "../@types";

export const registredPlayers = (
  playerNumber: number,
  forced: boolean = false
) => {
  if (typeof window !== "undefined") {
    const sessionPlayers: null | undefined | string =
      localStorage.getItem("players");

    let current = 0;

    if (sessionPlayers && sessionPlayers !== null) {
      const infoPlayers: InfoPlayer[] = JSON.parse(sessionPlayers);

      current = infoPlayers?.length;
    }

    if (playerNumber != current || forced) {
      const players = [];

      for (let i = 0; i < playerNumber; i++) {
        players.push({
          player: i + 1,
          life: 40,
          commanderDamage: [0, 0, 0, 0, 0, 0, 0, 0],
          infect: 0,
        });
      }

      localStorage.setItem("players", JSON.stringify(players));
    }
  }
};

export const updateRegistredPlayers = (dataUpdate: InfoPlayer) => {
  if (typeof window !== "undefined") {
    const sessionPlayers: null | undefined | string =
      localStorage.getItem("players");

    if (sessionPlayers && sessionPlayers !== null) {
      const infoPlayers: InfoPlayer[] = JSON.parse(sessionPlayers);

      const indexPlayer = infoPlayers?.findIndex(
        (item) => item?.player == dataUpdate?.player
      );

      infoPlayers[indexPlayer] = dataUpdate;

      localStorage.setItem("players", JSON.stringify(infoPlayers));
    }
  }
};

export const getRegistredPlayers = (playerNumber: number): InfoPlayer => {
  if (typeof window !== "undefined") {
    const sessionPlayers: null | undefined | string =
      localStorage.getItem("players");

    if (sessionPlayers && sessionPlayers !== null) {
      const infoPlayers: InfoPlayer[] = JSON.parse(sessionPlayers);

      const player = infoPlayers?.find((item) => item?.player == playerNumber);

      if (player) {
        return player;
      }
    }

    // redirect("/players");
  }

  return {
    player: playerNumber,
    life: 40,
    commanderDamage: [0, 0, 0, 0, 0, 0, 0, 0],
    infect: 0,
  } as InfoPlayer;
};

export const getRegistredQtd = (): number => {
  if (typeof window !== "undefined") {
    const sessionPlayers: null | undefined | string =
      localStorage.getItem("players");

    if (sessionPlayers && sessionPlayers !== null) {
      const infoPlayers: InfoPlayer[] = JSON.parse(sessionPlayers);

      return infoPlayers?.length - 1;
    }
  }

  return 2;
};
