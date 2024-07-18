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
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual
                direction="horizontal"
                inverse={false}
                player={1}
                outerConter="left"
              />
            </Stack>
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/dmu-278-island.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual
                direction="horizontal"
                inverse={false}
                player={2}
                outerConter="right"
              />
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
              <CounterIndividual
                direction="horizontal"
                inverse={false}
                player={3}
                outerConter="right"
              />
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
              <CounterIndividual
                direction="horizontal"
                inverse={false}
                player={4}
                outerConter="left"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
