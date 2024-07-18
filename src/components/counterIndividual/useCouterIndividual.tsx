import { useEffect, useRef, useState } from "react";

import { Layers } from "../../@types";
import { checkDeathCommander } from "../../helpers/checkDeathCommander";
import { useCounterLife } from "../../storeds/useThemeMode/useCounterLife";

export const useCouterIndividual = (playerNumber: number) => {
  const { getPlayer, updatePlayers } = useCounterLife();

  const player = getPlayer(playerNumber);
  // const infoPlayer = getPlayer(playerNumber);

  const [layerView, setLayerView] = useState<Layers>("life");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addIntervalId = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timeoutId = useRef<any>(null);

  const [playerDeath, setPlayerDeath] = useState(false);

  const revivePlayer = () => {
    setPlayerDeath(false);
  };

  // const deathPlayer = () => {
  //   setPlayerDeath(true);
  // };

  const deathByCommander = checkDeathCommander(player?.commanderDamage);

  const addLife = () => {
    updatePlayers({
      ...player,
      life: player?.life + 1,
    });
  };

  const minusLife = () => {
    updatePlayers({
      ...player,
      life: player?.life - 1,
    });
  };

  const pressAdd = () => {
    timeoutId.current = setTimeout(() => {
      if (addIntervalId.current === null) {
        addIntervalId.current = setInterval(addLife, 200);
      }
    }, 300);
  };

  const dropAdd = () => {
    clearTimeout(timeoutId.current!);
    if (addIntervalId.current) {
      clearInterval(addIntervalId.current);
      addIntervalId.current = null;
    }
  };

  const pressMinus = () => {
    timeoutId.current = setTimeout(() => {
      if (addIntervalId.current === null) {
        addIntervalId.current = setInterval(minusLife, 200);
      }
    }, 300);
  };

  const dropMinus = () => {
    clearTimeout(timeoutId.current!);
    if (addIntervalId.current) {
      clearInterval(addIntervalId.current);
      addIntervalId.current = null;
    }
  };

  const addCommanderDamage = (playerId: number, commanderId: number) => {
    const damageCommanderIndex = player?.commanderDamage?.findIndex(
      (item) => item?.commander == commanderId && item?.player == playerId
    );

    if (damageCommanderIndex > -1) {
      const damageCommander = player?.commanderDamage;

      damageCommander[damageCommanderIndex] = {
        ...damageCommander[damageCommanderIndex],
        damage: damageCommander[damageCommanderIndex]?.damage + 1,
      };

      minusLife();
      updatePlayers({
        ...player,
        commanderDamage: damageCommander,
      });
    }
  };

  const minusCommanderDamage = (playerId: number, commanderId: number) => {
    const damageCommanderIndex = player?.commanderDamage?.findIndex(
      (item) => item?.commander == commanderId && item?.player == playerId
    );

    if (damageCommanderIndex > -1) {
      const damageCommander = player?.commanderDamage;

      damageCommander[damageCommanderIndex] = {
        ...damageCommander[damageCommanderIndex],
        damage: damageCommander[damageCommanderIndex]?.damage - 1,
      };

      minusLife();
      updatePlayers({
        ...player,
        commanderDamage: damageCommander,
      });
    }
  };

  useEffect(() => {
    updatePlayers(player);
  }, [player]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     checkDeath(playerNumber, deathPlayer);
  //   }, 2000);
  // }, [player]);

  return {
    playerNumber,
    addLife,
    minusLife,
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
    layerView,
    setLayerView,
    addCommanderDamage,
    minusCommanderDamage,
    deathByCommander,
    playerDeath,
    revivePlayer,
  };
};
