import { Box, Button, Stack, Typography } from "@mui/material";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";
import { useCounterExperience } from "./useCounterExperience";

export const CounterExperience = ({ playerId }: Props) => {
  const { addEnergy, subEnergy } = useCounterExperience(playerId);
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
          <Button onClick={() => subEnergy()} sx={{ color: "white" }}>
            <TbArrowBadgeLeftFilled size={40} />
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h3" /// tamanho font
            color={"white"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            sx={{ textShadow: "2px 2px black" }}
          >
            {player?.energy}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => addEnergy()}
            sx={{ color: "white", textShadow: "2px 2px black" }}
          >
            <TbArrowBadgeRightFilled size={40} />
          </Button>
        </Box>
      </Stack>
    </>
  );
};
