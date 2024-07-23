import { useEffect, useRef, useState } from "react";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const useCounterLife = (playerId: number) => {
  const { addLife, subLife } = useGamePlayers();

  
  const [isPressAdd, setIsPressAdd ] = useState<boolean>(false)


  const addIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [modCounter, setModCouter] = useState({
    timestamp: 0,
    value: 0,
    show: false,
  });

  const tempCounter = (metod: "add" | "sub") => {
    if (new Date().getTime() > modCounter?.timestamp) {
      setModCouter({
        timestamp: new Date().getTime() + 1000,
        show: true,
        value: 0 + (metod === "add" ? 1 : -1),
      });
    } else {
      setModCouter({
        timestamp: new Date().getTime() + 1000,
        show: true,
        value: modCounter?.value + (metod === "add" ? 1 : -1),
      });
    }
  };

  const pressAdd = () => {
    setIsPressAdd(true)
    timeoutId.current = setTimeout(() => {
      if (addIntervalId.current === null && isPressAdd) {
        addIntervalId.current = setInterval(() => addLife(playerId), 200);
      }
    }, 300);
  };
  
  const dropAdd = () => {
    setIsPressAdd(false)
    if (addIntervalId.current) {
      clearInterval(addIntervalId.current);
      addIntervalId.current = null;
    }
  };

  const pressMinus = () => {
    setIsPressAdd(true)
    timeoutId.current = setTimeout(() => {
      if (addIntervalId.current === null && isPressAdd) {
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

  useEffect(() => {
    if (modCounter?.timestamp && modCounter?.show) {
      const checkTimestamp = () => {
        if (new Date().getTime() > modCounter.timestamp) {
          setModCouter({
            show: false,
            timestamp: 0,
            value: 0,
          });
        }
      };
      intervalRef.current = setInterval(checkTimestamp, 100);

      return () => {
        clearInterval(intervalRef.current!);
      };
    }
  }, [modCounter]);

  return {
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
    modCounter,
    tempCounter,
    isPressAdd
  };
};
