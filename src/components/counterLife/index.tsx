import { Box, Button, Stack, Typography } from "@mui/material";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";
import { useCounterLife } from "./useCounterLife";
import { CommanderDamage } from "./commanderDamage";

export const CounterLife = ({ playerId }: Props) => {
  const { dropAdd, dropMinus, pressAdd, pressMinus } = useCounterLife(playerId);
  const { getPlayer, addLife, subLife } = useGamePlayers();
  const player = getPlayer(playerId);

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Box>
          <Button
            onClick={() => subLife(playerId)}
            onMouseDown={pressMinus}
            onMouseUp={dropMinus}
            onMouseLeave={dropMinus}
            onTouchStart={pressMinus}
            onTouchEnd={dropMinus}
            sx={{ color: "white" }}
          >
            <TbArrowBadgeLeftFilled size={40} />
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h3"
            color={player?.life ? "white" : "red"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            sx={{ textShadow: "2px 2px black" }}
          >
            {player?.life}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => addLife(playerId)}
            onMouseDown={pressAdd}
            onMouseUp={dropAdd}
            onMouseLeave={dropAdd}
            onTouchStart={pressAdd}
            onTouchEnd={dropAdd}
            sx={{ color: "white", textShadow: "2px 2px black" }}
          >
            <TbArrowBadgeRightFilled size={40} />
          </Button>
        </Box>
      </Stack>
      <Box marginTop={0.5}>
        <CommanderDamage playerId={playerId} />
      </Box>
    </>
  );
};
