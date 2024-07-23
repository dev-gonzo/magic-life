import { Stack } from "@mui/material";
import { RollDice } from "../../@types";
import { mana } from "../../data/mana";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";

export const FourPlayers = ({ rollDice }: RollDice) => {
  const { getConfigPlayer, screen } = useGamePlayers();
  const player1 = getConfigPlayer(1);
  const player2 = getConfigPlayer(2);
  const player3 = getConfigPlayer(3);
  const player4 = getConfigPlayer(4);

  const orientation = (
    value?: string,
    outherValaue: undefined | string = undefined
  ) => {
    return screen === "table" ? value : outherValaue;
  };

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
          width={"calc(50% - 40px)"}
          gap={1}
        >
          <Stack
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
            <Stack width={"100%"} height={"100%"}>
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
            <Stack width={"100%"} height={"100%"}>
              <CounterIndividual playerId={2} />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          flexGrow={1}
          justifyContent={"center"}
          width={"calc(50% - 40px)"}
          gap={1}
        >
          <Stack
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player3?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: orientation("rotate(180deg)"),
            }}
            bgcolor={player3?.color ? mana[player3?.color]?.color : "#34495E"}
            overflow={"hidden"}
            height={"50%"}
          >
            <Stack width={"100%"} height={"100%"}>
              <CounterIndividual playerId={3} />
            </Stack>
          </Stack>
          <Stack
            // flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player4?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            bgcolor={player4?.color ? mana[player4?.color]?.color : "#34495E"}
            overflow={"hidden"}
            height={"50%"}
          >
            <Stack width={"100%"} height={"100%"}>
              <CounterIndividual playerId={4} />
            </Stack>
          </Stack>
        </Stack>
        <Bar rollDice={rollDice} />
      </Stack>
    </>
  );
};
