import { Stack } from "@mui/material";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";

export const SixPlayers = () => {
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
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/thb-253-mountain.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={true}
              player={1}
            />
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/thb-253-mountain.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={false}
              player={1}
            />
          </Stack>
        </Stack>
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
              backgroundImage: `url(../../assets/thb-250-plains.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={true}
              player={1}
            />
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/thb-250-plains.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={false}
              player={1}
            />
          </Stack>
        </Stack>
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
              backgroundImage: `url(../../assets/thb-250-plains.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={true}
              player={1}
            />
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/thb-250-plains.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={false}
              player={1}
            />
          </Stack>
        </Stack>

        <Bar />
      </Stack>
    </>
  );
};
