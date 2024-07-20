import { Box, Button, Stack, Typography } from "@mui/material";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";
import { useCounterInfect } from "./useCounterInfect";
import { defineSize } from "../../helpers/defineSize";
import { configCounter } from "../../data/configCounter";
import { Variant } from "@mui/material/styles/createTypography";

export const CounterInfect = ({ playerId }: Props) => {
  const { addInfect, subInfect } = useCounterInfect(playerId);
  const { getPlayer, players } = useGamePlayers();
  const player = getPlayer(playerId);
  const size = defineSize(players.length);

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Box>
          <Button onClick={() => subInfect()} sx={{ color: "white",  minWidth: "unset" }}>
            <TbArrowBadgeLeftFilled size={configCounter?.arrowAction[size]} />
          </Button>
        </Box>
        <Box>
          <Typography
            variant={configCounter.fontLife[size] as Variant}
            color={"white"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            sx={{ textShadow: "2px 2px black" }}
          >
            {player?.infect}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => addInfect()}
            sx={{ color: "white", minWidth: "unset" }}
          >
            <TbArrowBadgeRightFilled size={configCounter?.arrowAction[size]} />
          </Button>
        </Box>
      </Stack>
    </>
  );
};
