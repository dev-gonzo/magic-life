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
import { mana } from "../../data/mana";

export const CounterInfect = ({ playerId }: Props) => {
  const { addInfect, subInfect } = useCounterInfect(playerId);
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
          <Button onClick={() => subInfect()} sx={{ color: color,  minWidth: "unset" }}>
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
            {player?.infect}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => addInfect()}
            sx={{ color: color, minWidth: "unset" }}
          >
            <TbArrowBadgeRightFilled size={configCounter?.arrowAction[size]} />
          </Button>
        </Box>
      </Stack>
    </>
  );
};
