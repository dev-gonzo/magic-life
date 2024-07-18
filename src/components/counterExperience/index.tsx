import { Box, Button, Stack, Typography } from "@mui/material";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";
import { useCounterExperience } from "./useCounterExperience";

export const CounterExperience = ({ playerId }: Props) => {
  const { addExperience, subExperience } = useCounterExperience(playerId);
  const { getPlayer } = useGamePlayers();
  const player = getPlayer(playerId);

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Box>
          <Button onClick={() => subExperience()} sx={{ color: "white" }}>
            <TbArrowBadgeLeftFilled size={40} />
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h3"
            color={"white"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            sx={{ textShadow: "2px 2px black" }}
          >
            {player?.experience}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => addExperience()}
            sx={{ color: "white", textShadow: "2px 2px black" }}
          >
            <TbArrowBadgeRightFilled size={40} />
          </Button>
        </Box>
      </Stack>
    </>
  );
};
