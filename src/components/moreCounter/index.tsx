import { Stack } from "@mui/material";
import { FaDotCircle } from "react-icons/fa";
import {
  GiCheckedShield,
  GiImperialCrown,
  GiMedievalGate,
} from "react-icons/gi";
import { RiShieldFlashFill } from "react-icons/ri";
import { Layer } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CounterValue } from "../counterValue";
import { IconBar } from "../iconBar";
import { LeftRight } from "../LeftRight";
import { Props } from "./types";

export const MoreCounter = ({ direction, playerId }: Props) => {
  const { getPlayer, updatePlayers, setShowTemp, showTemp, setMonarch } =
    useGamePlayers();
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
      justifyContent={"space-evenly"}
      flexGrow={1}
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
          Value={<CounterValue value={player.energy} />}
          Icon={<IconBar Icon={RiShieldFlashFill} />}
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
          Value={<CounterValue value={player.experience} />}
          Icon={<IconBar Icon={GiCheckedShield} />}
        />
      </Stack>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          toggleControl("citysBlessing");
          updatePlayers({ ...player, citysBlessing: !player?.citysBlessing });
        }}
      >
        <LeftRight
          direction={direction}
          Value={
            player?.citysBlessing ? (
              <FaDotCircle size={10} color="yellow" />
            ) : (
              <></>
            )
          }
          Icon={<IconBar Icon={GiMedievalGate} />}
        />
      </Stack>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={0.5}
        onClick={() => {
          toggleControl("monarch");
          setMonarch(playerId);
        }}
      >
        <LeftRight
          direction={direction}
          Value={
            player?.monarch ? <FaDotCircle size={10} color="yellow" /> : <></>
          }
          Icon={<IconBar Icon={GiImperialCrown} />}
        />
      </Stack>
    </Stack>
  );
};
