import { Stack } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { RollDice } from "../../@types";
import { mana } from "../../data/mana";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";

export const TwoPlayers = ({ rollDice }: RollDice) => {
  const refTwo = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(refTwo?.current?.offsetWidth);
  const [height, setHeight] = useState(refTwo?.current?.offsetHeight);
 
  const { getConfigPlayer, screen } = useGamePlayers();
  const player1 = getConfigPlayer(1);
  const player2 = getConfigPlayer(2);

  const orientation = (
    value?: string,
    outherValaue: undefined | string = undefined
  ) => {
    return screen === "table" ? value : outherValaue;
  };

  useLayoutEffect(() => {
    if (!width) {
      setWidth(refTwo?.current?.offsetWidth);
      setHeight(refTwo?.current?.offsetHeight);
    }
  }, [refTwo]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (refTwo.current) {
        setWidth(refTwo.current.offsetWidth);
        setHeight(refTwo.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Stack
        flexDirection={"row"}
        width={"100%"}
        maxHeight={"100vh"}
        padding={0.5}
        gap={1}
      >
        <Stack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          width={"calc(50% - 40px)"}

        >
          <Stack
            position={"absolute"}
            width={orientation(`${height}px`, "100%")}
            height={orientation(`${width}px`, "100%")}
            sx={{
              backgroundImage: `url(${player1?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: orientation("rotate(90deg)"),
            }}
            borderRadius={5}
           
            bgcolor={player1?.color ? mana[player1?.color]?.color : "#34495E"}
            overflow={"hidden"}
          >
            <CounterIndividual playerId={1} />
          </Stack>
        </Stack>

        <Stack
          ref={refTwo}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          width={"calc(50% - 40px)"}

        >
          <Stack
            position={"absolute"}
            width={orientation(`${height}px`, "100%")}
            height={orientation(`${width}px`, "100%")}
            sx={{
              backgroundImage: `url(${player2?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: orientation("rotate(270deg)"),
            }}
            borderRadius={5}
           
            bgcolor={player2?.color ? mana[player2?.color]?.color : "#34495E"}
            overflow={"hidden"}
          >
            <CounterIndividual playerId={2} />
          </Stack>
        </Stack>
        <Bar rollDice={rollDice} />
      </Stack>
    </>
  );
};
