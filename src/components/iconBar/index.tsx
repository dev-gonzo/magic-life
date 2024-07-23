import { IconButton } from "@mui/material";
import { IconContext, IconType } from "react-icons";
import { configCounter } from "../../data/configCounter";
import { defineSize } from "../../helpers/defineSize";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const IconBar = ({
  Icon,
  contrast,
  action,
}: {
  Icon: IconType;
  action?: () => void;
  contrast?: string;
}) => {
  const { players } = useGamePlayers();

  return (
    <>
      <IconButton
        aria-label="add"
        size="small"
        onClick={action}
      >
        <IconContext.Provider
          value={{
            size: configCounter.iconBar[defineSize(players.length)],
            color: contrast,
          }}
        >
          <Icon />
        </IconContext.Provider>
      </IconButton>
    </>
  );
};
