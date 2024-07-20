import { IconContext, IconType } from "react-icons";
import { configCounter } from "../../data/configCounter";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { defineSize } from "../../helpers/defineSize";

export const IconBar = ({ Icon }: { Icon: IconType }) => {
  const { players } = useGamePlayers();

  return (
    <>
      <IconContext.Provider
        value={{
          size: configCounter.iconBar[defineSize(players.length)],
          color: "white",
        }}
      >
        <Icon />
      </IconContext.Provider>
    </>
  );
};
