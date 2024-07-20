import { Stack } from "@mui/material";
import { RollDice } from "../../@types";
import { mana } from "../../data/mana";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";

export const TwoPlayers = ({ rollDice }: RollDice) => {
  const { getConfigPlayer } = useGamePlayers();
  const player1 = getConfigPlayer(1);
  const player2 = getConfigPlayer(2);

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
          paddingY={1}
        >
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player1?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(90deg)",
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
        </Stack>
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          width={"calc(50% - 40px)"}
          gap={1}
          paddingY={1}
        >
          <Stack
            height={"50%"}
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player2?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(270deg)",
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
        <Bar rollDice={rollDice} />
      </Stack>
    </>
  );
};
