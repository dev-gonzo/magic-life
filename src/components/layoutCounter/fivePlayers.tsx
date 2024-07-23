import { Stack } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { RollDice } from "../../@types";
import { mana } from "../../data/mana";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";

export const FivePlayers = ({ rollDice }: RollDice) => {
  const refThreeCol = useRef<HTMLDivElement>(null);
  const refElementCol = useRef<HTMLDivElement>(null);
  const [widthCol, setWidthCol] = useState(refThreeCol?.current?.offsetWidth);
  const [heightCol, setHeightCol] = useState(
    refThreeCol?.current?.offsetHeight
  );
  const [width, setWidth] = useState(refElementCol?.current?.offsetWidth);
  const [height, setHeight] = useState(refElementCol?.current?.offsetHeight);

  const { getConfigPlayer, screen } = useGamePlayers();
  const player1 = getConfigPlayer(1);
  const player2 = getConfigPlayer(2);
  const player3 = getConfigPlayer(3);
  const player4 = getConfigPlayer(4);
  const player5 = getConfigPlayer(5);

  const orientation = (
    value?: string,
    outherValaue: undefined | string = undefined
  ) => {
    return screen === "table" ? value : outherValaue;
  };

  useLayoutEffect(() => {
    if (!widthCol) {
      setWidthCol(refThreeCol?.current?.offsetWidth);
      setHeightCol(refThreeCol?.current?.offsetHeight);
      setWidth(refElementCol?.current?.offsetWidth);
      setHeight(refElementCol?.current?.offsetHeight);
    }
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (refThreeCol.current) {
        setWidthCol(refThreeCol.current.offsetWidth);
        setHeightCol(refThreeCol.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (refElementCol.current) {
        setWidth(refElementCol.current.offsetWidth);
        setHeight(refElementCol.current.offsetHeight);
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
         
          flexGrow={1}
          justifyContent={"center"}
          width={"calc(33% - 40px)"}
          gap={1}
        >
          <Stack
           ref={refElementCol}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player1?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: orientation("rotate(180deg)"),
            }}
            bgcolor={player1?.color ? mana[player1?.color]?.color : "#34495E"}
            height={"50%"}
            overflow={"hidden"}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <CounterIndividual playerId={1} />
            </Stack>
          </Stack>
          <Stack
            height={"50%"}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player2?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            bgcolor={player2?.color ? mana[player2?.color]?.color : "#34495E"}
            overflow={"hidden"}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <CounterIndividual playerId={2} />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          flexGrow={1}
          justifyContent={"center"}
          width={"calc(33% - 40px)"}
          gap={1}
        >
          <Stack
            borderRadius={5}
            height={"50%"}
            sx={{
              backgroundImage: `url(${player3?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: orientation("rotate(180deg)"),
            }}
            bgcolor={player3?.color ? mana[player3?.color]?.color : "#34495E"}
            overflow={"hidden"}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <CounterIndividual playerId={3} />
            </Stack>
          </Stack>
          <Stack
            height={"50%"}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player4?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            bgcolor={player4?.color ? mana[player4?.color]?.color : "#34495E"}
            overflow={"hidden"}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <CounterIndividual playerId={4} />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          ref={refThreeCol}
          flexGrow={1}
          justifyContent={"center"}
          alignItems={"center"}
          width={"calc(33% - 40px)"}
          gap={1}
        >
          <Stack
            position={"absolute"}
            width={`${(width ?? 0) > (heightCol ?? 0) ? heightCol : width}px`}
            height={orientation(`${widthCol}px`, `${height}px`)}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player5?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: orientation("rotate(270deg)"),
            }}
            bgcolor={player5?.color ? mana[player5?.color]?.color : "#34495E"}
            overflow={"hidden"}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <CounterIndividual playerId={5} />
            </Stack>
          </Stack>
        </Stack>
        <Bar rollDice={rollDice} />
      </Stack>
    </>
  );
};
