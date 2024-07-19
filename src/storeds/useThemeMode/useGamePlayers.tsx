import { create } from "zustand";
import { getStoragePlayer } from "../../helpers/getStoragePlayers";
import { PropsInfoPlayers } from "./@types";
import { InfoPlayer } from "../../@types";
import { RiShieldFlashFill } from "react-icons/ri";

export const useGamePlayers = create<PropsInfoPlayers>((set, get) => ({
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
            experience: 0,
            citysBlessing: false,
            monarch: false,
            viewCommanderDamage: false,
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
            experience: 0,
            citysBlessing: false,
            monarch: false,
            viewCommanderDamage: false,
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

  addLife: (playerId) =>
    set((state) => {
      const newInfoPlayers = state?.players;

      const indexPlayer = newInfoPlayers?.findIndex(
        (item) => item?.player == playerId
      );

      newInfoPlayers[indexPlayer] = {
        ...newInfoPlayers[indexPlayer],
        life: newInfoPlayers[indexPlayer]?.life + 1,
      };

      localStorage.setItem("players", JSON.stringify(newInfoPlayers));
      return { players: newInfoPlayers };
    }),

  subLife: (playerId) =>
    set((state) => {
      const newInfoPlayers = state?.players;

      const indexPlayer = newInfoPlayers?.findIndex(
        (item) => item?.player == playerId
      );

      newInfoPlayers[indexPlayer] = {
        ...newInfoPlayers[indexPlayer],
        life: newInfoPlayers[indexPlayer]?.life - 1,
      };

      localStorage.setItem("players", JSON.stringify(newInfoPlayers));
      return { players: newInfoPlayers };
    }),

  addCommanderDamage: (playerId, playerCommander, commanderId) =>
    set((state) => {
      const newInfoPlayers = state?.players;

      const indexPlayer = newInfoPlayers?.findIndex(
        (item) => item?.player == playerId
      );

      const damageCommanderIndex = newInfoPlayers[
        indexPlayer
      ]?.commanderDamage?.findIndex((item) => {
        return (
          item?.commander == commanderId && item?.player == playerCommander
        );
      });

      if (damageCommanderIndex > -1) {
        const damageCommander = newInfoPlayers[indexPlayer]?.commanderDamage;

        damageCommander[damageCommanderIndex] = {
          ...damageCommander[damageCommanderIndex],
          damage: damageCommander[damageCommanderIndex]?.damage + 1,
        };

        newInfoPlayers[indexPlayer] = {
          ...newInfoPlayers[indexPlayer],
          commanderDamage: damageCommander,
          life: newInfoPlayers[indexPlayer]?.life - 1,
        };

        localStorage.setItem("players", JSON.stringify(newInfoPlayers));
        return { players: newInfoPlayers };
      }

      newInfoPlayers[indexPlayer] = {
        ...newInfoPlayers[indexPlayer],
        commanderDamage: [
          ...newInfoPlayers[indexPlayer].commanderDamage,
          {
            player: playerCommander,
            commander: commanderId,
            damage: 1,
          },
        ],
        life: newInfoPlayers[indexPlayer]?.life - 1,
      };

      localStorage.setItem("players", JSON.stringify(newInfoPlayers));
      return { players: newInfoPlayers };
    }),

  subCommanderDamage: (playerId, playerCommander, commanderId) =>
    set((state) => {
      const newInfoPlayers = state?.players;

      const indexPlayer = newInfoPlayers?.findIndex(
        (item) => item?.player == playerId
      );

      const damageCommanderIndex = newInfoPlayers[
        indexPlayer
      ]?.commanderDamage?.findIndex(
        (item) =>
          item?.commander == commanderId && item?.player == playerCommander
      );

      if (damageCommanderIndex > -1) {
        const damageCommander = newInfoPlayers[indexPlayer]?.commanderDamage;

        damageCommander[damageCommanderIndex] = {
          ...damageCommander[damageCommanderIndex],
          damage:
            damageCommander[damageCommanderIndex]?.damage > 0
              ? damageCommander[damageCommanderIndex]?.damage - 1
              : 0,
        };

        newInfoPlayers[indexPlayer] = {
          ...newInfoPlayers[indexPlayer],
          commanderDamage: damageCommander,
          life: newInfoPlayers[indexPlayer]?.life + 1,
        };

        localStorage.setItem("players", JSON.stringify(newInfoPlayers));
        return { players: newInfoPlayers };
      }

      localStorage.setItem("players", JSON.stringify(newInfoPlayers));
      return { players: newInfoPlayers };
    }),

  setMonarch: (playerId) =>
    set((state) => {
      const oldInfoPlayers = state?.players;

      const indexPlayer = oldInfoPlayers?.findIndex(
        (item) => item?.player == playerId
      );

      if (oldInfoPlayers[indexPlayer]?.monarch) {
        oldInfoPlayers[indexPlayer] = {
          ...oldInfoPlayers[indexPlayer],
          monarch: false,
        };

        localStorage.setItem("players", JSON.stringify(oldInfoPlayers));
        return { players: oldInfoPlayers };
      }

      const newInfoPlayers = state.players.map((item) => {
        return { ...item, monarch: item?.player == playerId };
      });

      localStorage.setItem("players", JSON.stringify(newInfoPlayers));
      return { players: newInfoPlayers };
    }),

  setShowTemp: (playerId, layer) =>
    set(() => {
      return {
        showTemp: {
          layer: layer,
          icon: <RiShieldFlashFill size={33} color="white" />,
          playerId: playerId,
          timestamp: new Date().getTime() + 1500,
        },
      };
    }),

  toogleShowCommander: (playerId) =>
    set((state) => {
      const newInfoPlayers = state?.players;

      const indexPlayer = newInfoPlayers?.findIndex(
        (item) => item?.player == playerId
      );

      newInfoPlayers[indexPlayer] = {
        ...newInfoPlayers[indexPlayer],
        viewCommanderDamage: !newInfoPlayers[indexPlayer]?.viewCommanderDamage,
      };

      localStorage.setItem("players", JSON.stringify(newInfoPlayers));
      return { players: newInfoPlayers };
    }),

  cleanShowTemp: () =>
    set(() => {
      return {
        showTemp: undefined,
      };
    }),
}));
