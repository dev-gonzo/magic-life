import { Stack } from "@mui/material";
import { CounterIndividual } from "../counterIndividual";
import { Bar } from "./bar";

export const TwoPlayers = () => {
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
          borderRadius={5}
          width={"calc(50% - 40px)"}
          sx={{
            backgroundImage: `url(../../assets/thb-253-mountain.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CounterIndividual direction="vertical" inverse={false} player={1} />
        </Stack>
        <Bar />
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
          <CounterIndividual direction="vertical" inverse player={2} />
        </Stack>
      </Stack>
    </>
  );
};
