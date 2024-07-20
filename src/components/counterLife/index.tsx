import { Box, Button, Stack, Typography } from "@mui/material";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";
import { useCounterLife } from "./useCounterLife";
import { CommanderDamage } from "./commanderDamage";
import { configCounter } from "../../data/configCounter";
import { defineSize } from "../../helpers/defineSize";
import { Variant } from "@mui/material/styles/createTypography";

export const CounterLife = ({ playerId }: Props) => {
  const { dropAdd, dropMinus, pressAdd, pressMinus } = useCounterLife(playerId);
  const { getPlayer, addLife, subLife, players } = useGamePlayers();
  const player = getPlayer(playerId);
  const size = defineSize(players.length);
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Button
          onClick={() => subLife(playerId)}
          onMouseDown={pressMinus}
          onMouseUp={dropMinus}
          onMouseLeave={dropMinus}
          onTouchStart={pressMinus}
          onTouchEnd={dropMinus}
          sx={{ color: "white",  minWidth: "unset" }}
        >
          <TbArrowBadgeLeftFilled size={configCounter?.arrowAction[size]} />
        </Button>

        <Box>
          <Typography
            variant={configCounter.fontLife[size] as Variant}
            color={player?.life > 0 && player?.infect < 10 ? "white" : "red"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            sx={{ textShadow: "2px 2px black" }}
          >
            {player?.life}
          </Typography>
        </Box>

        <Button
          onClick={() => addLife(playerId)}
          onMouseDown={pressAdd}
          onMouseUp={dropAdd}
          onMouseLeave={dropAdd}
          onTouchStart={pressAdd}
          onTouchEnd={dropAdd}
          sx={{ color: "white", minWidth: "unset" }}
        >
          <TbArrowBadgeRightFilled size={configCounter?.arrowAction[size]} />
        </Button>
      </Stack>
      <Box marginTop={0.5}>
        <CommanderDamage playerId={playerId} />
      </Box>
    </>
  );
};
