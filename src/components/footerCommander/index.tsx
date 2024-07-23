import { GiBarbute } from "react-icons/gi";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { configCounter } from "../../data/configCounter";
import { defineSize } from "../../helpers/defineSize";
import { mana } from "../../data/mana";
import { IconButton } from "@mui/material";

export const FooterCommander = ({ playerId }: { playerId: number }) => {
  const { toogleShowCommander, players, getConfigPlayer } = useGamePlayers();
  const playerConfig = getConfigPlayer(playerId);
  return (
    <>
      <IconButton
        aria-label="add"
        size="small"
        sx={{ color: "white" }}
        onClick={() => toogleShowCommander(playerId)}
      >
        <GiBarbute
          color={
            playerConfig?.color ? mana[playerConfig?.color]?.contrast : "white"
          }
          size={configCounter.iconButton[defineSize(players.length)]}
          style={{ marginBottom: 1 }}
        />
      </IconButton>
    </>
  );
};
