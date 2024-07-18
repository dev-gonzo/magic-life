import { Stack, Typography } from "@mui/material";
import { FaDotCircle } from "react-icons/fa";
import {
  GiCheckedShield,
  GiImperialCrown,
  GiMedievalGate,
} from "react-icons/gi";
import { RiShieldFlashFill } from "react-icons/ri";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { LeftRight } from "../LeftRight";
import { Props } from "./types";
import { Layer } from "../../@types";

export const MoreCounter = ({ direction, playerId }: Props) => {
  const { getPlayer, updatePlayers, setShowTemp, showTemp } = useGamePlayers();
  const player = getPlayer(playerId);

  const toggleControl = (value: Layer) => {
    if (showTemp?.layer != value) {
      setShowTemp(playerId, value);
    }
  };

  return (
    <Stack
      paddingY={1}
      flexWrap={"nowrap"}
      alignItems={"flex-start"}
      gap={2}
      color={"white"}
      padding={1}
    >
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          toggleControl("energy");
          updatePlayers({ ...player, energy: player?.energy + 1 });
        }}
      >
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              {player?.energy}
            </Typography>
          }
          Icon={<RiShieldFlashFill size={22} />}
        />
      </Stack>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          toggleControl("experience");
          updatePlayers({ ...player, experience: player?.experience + 1 });
        }}
      >
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              {player?.experience}
            </Typography>
          }
          Icon={<GiCheckedShield size={22} />}
        />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={<FaDotCircle size={10} color="yellow" />}
          Icon={<GiMedievalGate size={22} />}
        />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={<FaDotCircle size={10} color="yellow" />}
          Icon={<GiImperialCrown size={22} />}
        />
      </Stack>
    </Stack>
  );
};
