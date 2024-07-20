import { useEffect, useRef, useState } from "react";
import { Layers } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { dataLayers } from "./dataLayers";
import { checkDeath } from "../../helpers/checkDeath";

export const useCouterIndividual = (playerId: number) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const layers = dataLayers(playerId);
  const { showTemp, cleanShowTemp, getPlayer, updatePlayers } =
    useGamePlayers();
  const [layerView, setLayerView] = useState<Layers>(layers?.life);
  const player = getPlayer(playerId);

  const deathPlayer = () => {
    updatePlayers({
      ...player,
      loses: true,
      immmortal: false,
    });
  };

  useEffect(() => {
    if (showTemp?.timestamp && showTemp?.playerId == playerId) {
      setLayerView(layers?.[showTemp.layer]);

      const checkTimestamp = () => {
        if (new Date().getTime() > showTemp.timestamp) {
          setLayerView(layers?.life);
          cleanShowTemp();
        }
      };

      intervalRef.current = setInterval(checkTimestamp, 100);

      return () => {
        clearInterval(intervalRef.current!);
      };
    }
  }, [showTemp, cleanShowTemp]);

  useEffect(() => {
    setTimeout(() => {
      checkDeath(playerId, deathPlayer);
    }, 3000);
  }, [player]);

  return {
    layerView,
    setLayerView,
  };
};
