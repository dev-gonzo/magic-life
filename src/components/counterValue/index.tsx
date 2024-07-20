import { Typography } from "@mui/material";
import { defineSize } from "../../helpers/defineSize";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { configCounter } from "../../data/configCounter";

export const CounterValue = ({ value }: { value: string | number }) => {
  const { players } = useGamePlayers();
  return (
    <>
      <Typography
        component={"span"}
        variant="caption"
        fontSize={configCounter?.counterValue[defineSize(players.length)]}
      >
        {value}
      </Typography>
    </>
  );
};
