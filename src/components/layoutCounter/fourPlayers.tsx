import { Stack } from "@mui/material";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";

export const FourPlayers = () => {
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
              backgroundImage: `url(../../assets/dmu-277-plains.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(180deg)",
            }}
            bgcolor={"orange"}
            height={"50%"}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual playerId={1} />
            </Stack>
          </Stack>
          <Stack
            height={"50%"}
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/dmu-278-island.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            bgcolor={"orange"}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
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
              backgroundImage: `url(../../assets/dmu-279-swamp.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(180deg)",
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual playerId={3} />
            </Stack>
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/dmu-280-mountain.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual playerId={4} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
