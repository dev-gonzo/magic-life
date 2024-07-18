import { Stack, Typography } from "@mui/material";
import { BsShieldFillPlus } from "react-icons/bs";
import { FaRadiation } from "react-icons/fa6";
import { GiRollingDices } from "react-icons/gi";
import { LeftRight } from "../LeftRight";
import Phyrexia from "../../assets/phyrexa.svg";
import { Props } from "./types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Layer } from "../../@types";

export const OutherCounter = ({ direction, playerId }: Props) => {
  const { getPlayer, updatePlayers, setShowTemp, showTemp } = useGamePlayers();
  const player = getPlayer(playerId);

  const toggleControl = (value: Layer) => {
    if (showTemp?.layer != value) {
      setShowTemp(playerId, "energy");
    }
  };

  return (
    <Stack
      paddingY={1}
      flexWrap={"nowrap"}
      alignItems={"flex-end"}
      gap={2}
      color={"white"}
      padding={1}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              2
            </Typography>
          }
          Icon={<BsShieldFillPlus size={22} />}
        />
      </Stack>

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          toggleControl("infect");
          updatePlayers({ ...player, energy: player?.energy + 1 });
        }}
      >
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              {player?.infect}
            </Typography>
          }
          Icon={
            <img src={Phyrexia} width={30} height={25} style={{ margin: -4 }} />
          }
        />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              2
            </Typography>
          }
          Icon={<FaRadiation size={22} />}
        />
      </Stack>

      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <GiRollingDices size={22} />
      </Stack>
    </Stack>
  );
};
