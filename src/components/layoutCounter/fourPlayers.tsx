import { Stack } from "@mui/material";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const FourPlayers = () => {
  const { getConfigPlayer } = useGamePlayers();
  const player1 = getConfigPlayer(1);
  const player2 = getConfigPlayer(2);
  const player3 = getConfigPlayer(3);
  const player4 = getConfigPlayer(4);

  return (
    <>
      <Stack
        flexDirection={"row"}
        width={"100%"}
        maxHeight={"100vh"}
        padding={0.5}
      >
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          width={"calc(50% - 40px)"}
          gap={1}
        >
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player1?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(180deg)",
            }}
            bgcolor={"#848A9C"}
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
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player2?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            bgcolor={"orange"}
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
        <Bar />
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          width={"calc(50% - 40px)"}
          gap={1}
        >
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player3?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(180deg)",
            }}
            bgcolor={"#1F2A38"}
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
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(${player4?.bgMagic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            bgcolor={"#34495E"}
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
      </Stack>
    </>
  );
};
