import { useRef } from "react";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const useLifeCounter = (playerId: number) => {
  const { addLife, subLife } = useGamePlayers();
  const addIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pressAdd = () => {
    timeoutId.current = setTimeout(() => {
      if (addIntervalId.current === null) {
        addIntervalId.current = setInterval(() => addLife(playerId), 200);
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
        addIntervalId.current = setInterval(() => subLife(playerId), 200);
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

  return {
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
  };
};
