import { Box, Button, Stack, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { configCounter } from "../../data/configCounter";
import { mana } from "../../data/mana";
import { defineSize } from "../../helpers/defineSize";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";
import { useCounterRad } from "./useCounterRad";

export const CounterRad = ({ playerId }: Props) => {
  const { addRad, subRad } = useCounterRad(playerId);
  const { getPlayer, players, getConfigPlayer } = useGamePlayers();
  const player = getPlayer(playerId);
  const size = defineSize(players.length);
  const playerConfig = getConfigPlayer(playerId);
  
  const color =
    playerConfig?.color && !playerConfig?.bgMagic
      ? mana[playerConfig?.color]?.contrast
      : "white";

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Box>
          <Button onClick={() => subRad()} sx={{ color: color,  minWidth: "unset" }}>
            <TbArrowBadgeLeftFilled size={configCounter?.arrowAction[size]} />
          </Button>
        </Box>
        <Box>
          <Typography
            variant={configCounter.fontLife[size] as Variant}
            color={color}
            fontWeight={"bold"}
            fontFamily={"monospace"}
          >
            {player?.rad}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => addRad()}
            sx={{ color: color,  minWidth: "unset" }}
          >
            <TbArrowBadgeRightFilled size={configCounter?.arrowAction[size]} />
          </Button>
        </Box>
      </Stack>
    </>
  );
};
