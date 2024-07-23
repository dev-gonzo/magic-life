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
import { mana } from "../../data/mana";

export const MoreCounter = ({ direction, playerId }: Props) => {
  const {
    getPlayer,
    updatePlayers,
    setShowTemp,
    showTemp,
    getConfigPlayer,
    setMonarch,
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
      alignItems={"flex-start"}
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
          toggleControl("energy");
          updatePlayers({ ...player, energy: player?.energy + 1 });
        }}
      >
        <LeftRight
          direction={direction}
          Value={<CounterValue value={player.energy} playerId={playerId} />}
          Icon={<IconBar Icon={RiShieldFlashFill} contrast={color} />}
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
          Value={<CounterValue value={player.experience} playerId={playerId} />}
          Icon={<IconBar Icon={GiCheckedShield} contrast={color} />}
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
          Icon={<IconBar Icon={GiMedievalGate} contrast={color} />}
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
          Icon={<IconBar Icon={GiImperialCrown} contrast={color} />}
        />
      </Stack>
    </Stack>
  );
};
