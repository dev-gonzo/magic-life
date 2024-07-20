import { Stack, Typography } from "@mui/material";
import { BsShieldFillPlus } from "react-icons/bs";
import { FaRadiation } from "react-icons/fa6";
import { GiPirateGrave } from "react-icons/gi";
import { Layer } from "../../@types";
import Phyrexia from "../../assets/phyrexa.svg";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CounterValue } from "../counterValue";
import { IconBar } from "../iconBar";
import { LeftRight } from "../LeftRight";
import { Props } from "./types";

export const OutherCounter = ({ direction, playerId }: Props) => {
  const { getPlayer, updatePlayers, setShowTemp, showTemp, players } =
    useGamePlayers();
  const player = getPlayer(playerId);

  const toggleControl = (value: Layer) => {
    if (showTemp?.layer != value) {
      setShowTemp(playerId, value);
    }
  };

  const sizePhyrexia = () => {
    if (players.length >= 5) {
      return 28;
    }

    if (players.length == 4) {
      return 30;
    }

    return 32;
  };

  return (
    <Stack
      paddingY={1}
      flexWrap={"nowrap"}
      alignItems={"flex-end"}
      gap={2}
      color={"white"}
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
          Value={<CounterValue value={player.commanderTax} />}
          Icon={<IconBar Icon={BsShieldFillPlus} />}
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
            life: player?.life - 1,
          });
        }}
      >
        <LeftRight
          direction={direction}
          Icon={
            <img
              src={Phyrexia}
              width={sizePhyrexia()}
              height={25}
              style={{ margin: -4 }}
            />
          }
          Value={<CounterValue value={player.infect} />}
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
          Value={<CounterValue value={player.rad} />}
          Icon={<IconBar Icon={FaRadiation} />}
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
          Icon={<IconBar Icon={GiPirateGrave} />}
        />
      </Stack>
    </Stack>
  );
};
