import { Typography } from "@mui/material";
import { defineSize } from "../../helpers/defineSize";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { configCounter } from "../../data/configCounter";
import { mana } from "../../data/mana";

export const CounterValue = ({ value, playerId}: { value: string | number, playerId: number }) => {
  const { players, getConfigPlayer } = useGamePlayers();
  const playerConfig = getConfigPlayer(playerId);
  return (
    <>
      <Typography
        component={"span"}
        variant="caption"
        fontSize={configCounter?.counterValue[defineSize(players.length)]}
        color={
          playerConfig?.color ? mana[playerConfig?.color]?.contrast : "white"
        }
      >
        {value}
      </Typography>
    </>
  );
};
