import { useEffect, useRef, useState } from "react";
import { Layers } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { dataLayers } from "./dataLayers";

export const useCouterIndividual = (playerId: number) => {
  const layers = dataLayers(playerId);
  const { showTemp, cleanShowTemp } = useGamePlayers();
  const [layerView, setLayerView] = useState<Layers>(layers?.life);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  console.log(showTemp)

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

  return {
    layerView,
    setLayerView,
  };
};
