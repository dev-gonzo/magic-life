import { Box, Button, Stack, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { configCounter } from "../../data/configCounter";
import { mana } from "../../data/mana";
import { defineSize } from "../../helpers/defineSize";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CommanderDamage } from "./commanderDamage";
import { Props } from "./types";
import { useCounterLife } from "./useCounterLife";

export const CounterLife = ({ playerId }: Props) => {
  const { dropAdd, dropMinus, pressAdd, pressMinus, modCounter, tempCounter } =
    useCounterLife(playerId);
  const { getPlayer, addLife, subLife, players, getConfigPlayer } =
    useGamePlayers();
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
        <Button
          onClick={() => {
            tempCounter("sub");
            subLife(playerId);
          }}
          onMouseDown={pressMinus}
          onMouseUp={dropMinus}
          onMouseLeave={dropMinus}
          onTouchStart={pressMinus}
          onTouchEnd={dropMinus}
          sx={{ color: color, minWidth: "unset" }}
        >
          <FaCircleMinus size={configCounter?.arrowAction[size]} />
        </Button>

        <Box margin={0.4}>
          <Typography
            color={player?.life > 0 && player?.infect < 10 ? color : "red"}
            fontFamily={"monospace"}
            textAlign={"center"}
          >
            {modCounter?.show ?  modCounter?.value : <>&nbsp;</>}
          </Typography>
          <Typography
            variant={configCounter.fontLife[size] as Variant}
            color={player?.life > 0 && player?.infect < 10 ? color : "red"}
            fontWeight={"700"}
            fontFamily={"monospace"}
          >
            {player?.life}
          </Typography>
          <Typography
           color={player?.life > 0 && player?.infect < 10 ? color : "red"}
           fontFamily={"monospace"}
           textAlign={"center"}
          >
            &nbsp;
          </Typography>
        </Box>

        <Button
          onClick={() => {
            tempCounter("add");
            addLife(playerId);
          }}
          onMouseDown={pressAdd}
          onMouseUp={dropAdd}
          onMouseLeave={dropAdd}
          onTouchStart={pressAdd}
          onTouchEnd={dropAdd}
          sx={{ color: color, minWidth: "unset" }}
        >
          <FaCirclePlus size={configCounter?.arrowAction[size]} />
        </Button>
      </Stack>
      <Box marginTop={0.5}>
        <CommanderDamage playerId={playerId} />
      </Box>
    </>
  );
};
