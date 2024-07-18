import { Stack } from "@mui/material";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";

export const ThreePlayers = () => {
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
          borderRadius={5}
          width={"calc(50% - 40px)"}
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

        <Stack
          flexGrow={1}
          bgcolor={"#E49977"}
          justifyContent={"center"}
          borderRadius={5}
          width={"calc(50% - 40px)"}
          sx={{
            backgroundImage: `url(../../assets/thb-250-plains.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CounterIndividual
            direction="horizontal"
            inverse={false}
            player={2}
          />
        </Stack>
        <Stack
          flexGrow={1}
          bgcolor={"#E49977"}
          justifyContent={"center"}
          borderRadius={5}
          width={"calc(50% - 40px)"}
          sx={{
            backgroundImage: `url(../../assets/thb-250-plains.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CounterIndividual
            direction="horizontal"
            inverse={false}
            player={2}
          />
        </Stack>
        <Bar />
      </Stack>
    </>
  );
};
