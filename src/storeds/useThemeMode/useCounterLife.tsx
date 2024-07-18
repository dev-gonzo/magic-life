import { create } from "zustand";
import { getStoragePlayer } from "../../helpers/getStoragePlayers";
import { PropsInfoPlayers } from "./@types";
import { InfoPlayer } from "../../@types";
import { RiShieldFlashFill } from "react-icons/ri";

export const useCounterLife = create<PropsInfoPlayers>((set, get) => ({
  players: getStoragePlayer(),
  showTemp: undefined,

  initGame: (playersNumber) =>
    set((state) => {
      const oldPlayersQtd = state?.players?.length;
      let newPlayers: InfoPlayer[] = [];

      if (playersNumber) {
        for (let i = 0; i < playersNumber; i++) {
          newPlayers.push({
            player: i + 1,
            life: 40,
            commanderDamage: [],
            commanderTax: 0,
            infect: 0,
            rad: 0,
            energy: 0,
            experence: 0,
            citysBlessing: false,
            monarch: false,
          });
        }
      } else if (!playersNumber && !oldPlayersQtd) {
        for (let i = 0; i < 2; i++) {
          newPlayers.push({
            player: i + 1,
            life: 40,
            commanderDamage: [],
            commanderTax: 0,
            infect: 0,
            rad: 0,
            energy: 0,
            experence: 0,
            citysBlessing: false,
            monarch: false,
          });
        }
      } else {
        newPlayers = state?.players;
      }

      localStorage?.setItem("players", JSON.stringify(newPlayers));
      return { players: newPlayers };
    }),

  updatePlayers: (infoPlayer) =>
    set((state) => {
      const newInfoPlayers = state?.players;

      const indexPlayer = newInfoPlayers?.findIndex(
        (item) => item?.player == infoPlayer?.player
      );

      newInfoPlayers[indexPlayer] = infoPlayer;

      localStorage.setItem("players", JSON.stringify(newInfoPlayers));
      return { players: newInfoPlayers };
    }),

  getPlayer: (playerId) => {
    return get().players?.find(
      (item) => item?.player == playerId
    ) as InfoPlayer;
  },

  setShowTemp: () =>
    set(() => {
      return {
        showTemp: {
          title: "Energia",
          icon: <RiShieldFlashFill size={33} color="white" />,
          playerId: 2,
          timestamp: new Date().getTime() + 1500,
        },
      };
    }),

  closShowTemp: () =>
    set(() => {
      return {
        showTemp: undefined,
      };
    }),
}));
