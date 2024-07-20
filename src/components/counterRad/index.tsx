import { Box, Button, Stack, Typography } from "@mui/material";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";
import { useCounterRad } from "./useCounterRad";
import { defineSize } from "../../helpers/defineSize";
import { configCounter } from "../../data/configCounter";
import { Variant } from "@mui/material/styles/createTypography";

export const CounterRad = ({ playerId }: Props) => {
  const { addRad, subRad } = useCounterRad(playerId);
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
          <Button onClick={() => subRad()} sx={{ color: "white",  minWidth: "unset" }}>
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
            {player?.rad}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => addRad()}
            sx={{ color: "white",  minWidth: "unset" }}
          >
            <TbArrowBadgeRightFilled size={configCounter?.arrowAction[size]} />
          </Button>
        </Box>
      </Stack>
    </>
  );
};
