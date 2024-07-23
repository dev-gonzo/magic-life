import { Stack, Typography } from "@mui/material";
import { BsShieldFillPlus } from "react-icons/bs";
import { FaRadiation } from "react-icons/fa6";
import { GiPirateGrave } from "react-icons/gi";
import { Layer } from "../../@types";
import { mana } from "../../data/mana";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CounterValue } from "../counterValue";
import { IconBar } from "../iconBar";
import { IconPhyrexia } from "../iconPhyrexia";
import { LeftRight } from "../LeftRight";
import { Props } from "./types";

export const OutherCounter = ({ direction, playerId }: Props) => {
  const {
    getPlayer,
    updatePlayers,
    setShowTemp,
    showTemp,
    getConfigPlayer,
  } = useGamePlayers();
  const player = getPlayer(playerId);
  const playerConfig = getConfigPlayer(playerId);

  const toggleControl = (value: Layer) => {
    if (showTemp?.layer != value) {
      setShowTemp(playerId, value);
    }
  };

  const color =
    playerConfig?.color && !playerConfig?.bgMagic
      ? mana[playerConfig?.color]?.contrast
      : "white";

  return (
    <Stack
      paddingY={1}
      flexWrap={"nowrap"}
      alignItems={"flex-end"}
      gap={2}
      padding={1}
      justifyContent={"space-evenly"}
      flexGrow={1}
    >
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          toggleControl("commanderTax");
          updatePlayers({ ...player, commanderTax: player?.commanderTax + 2 });
        }}
      >
        <LeftRight
          direction={direction}
          Value={
            <CounterValue value={player.commanderTax} playerId={playerId} />
          }
          Icon={<IconBar Icon={BsShieldFillPlus} contrast={color} />}
        />
      </Stack>

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          toggleControl("infect");
          updatePlayers({
            ...player,
            infect: player?.infect + 1,
          });
        }}
      >
        <LeftRight
          direction={direction}
          Icon={
            
              <IconPhyrexia color={color} />
            
          }
          Value={<CounterValue value={player.infect} playerId={playerId} />}
        />
      </Stack>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          toggleControl("rad");
          updatePlayers({ ...player, rad: player?.rad + 1 });
        }}
      >
        <LeftRight
          direction={direction}
          Value={<CounterValue value={player.rad} playerId={playerId} />}
          Icon={<IconBar Icon={FaRadiation} contrast={color} />}
        />
      </Stack>

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          updatePlayers({
            ...player,
            loses: true,
            immmortal: false,
          });
        }}
      >
        <LeftRight
          direction={direction}
          Value={<Typography component={"span"} variant="caption"></Typography>}
          Icon={<IconBar Icon={GiPirateGrave} contrast={color} />}
        />
      </Stack>
    </Stack>
  );
};
