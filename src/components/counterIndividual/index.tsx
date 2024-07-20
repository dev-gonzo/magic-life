import { Stack } from "@mui/material";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CommanderDamage } from "../commanderDamage";
import { Death } from "../death";
import { FooterDeath } from "../footerDeath";
import { TitleCard } from "../titleCard";
import { Props } from "./types";
import { useCouterIndividual } from "./useCouterIndividual";

export const CounterIndividual = ({ playerId }: Props) => {
  const { layerView } = useCouterIndividual(playerId);
  const { getPlayer } = useGamePlayers();
  const player = getPlayer(playerId);

  if (player?.loses && !player?.immmortal) {
    return (
      <>
        <Stack flexGrow={1} alignItems={"center"} borderRadius={3}>
          <TitleCard playerId={playerId} title={"Death"} />
          <Stack
            flexGrow={1}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={1}
          >
            <Death />
          </Stack>
          <Stack>
            <FooterDeath playerId={playerId} />
          </Stack>
        </Stack>
      </>
    );
  }

  if (player?.viewCommanderDamage) {
    return (
      <>
        <Stack flexGrow={1} alignItems={"center"} borderRadius={3}>
          <TitleCard playerId={playerId} title={"Damage Commander"} />
          <Stack
            flexGrow={1}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={1}
          >
            <CommanderDamage playerId={playerId} />
          </Stack>
          <Stack>{layerView?.footer}</Stack>
        </Stack>
      </>
    );
  }

  return (
    <>
      <Stack height={"100%"} flexDirection={"row"} gap={0.5} borderRadius={3}>
        <Stack justifyContent={"center"}  >
          {layerView?.sideLeft}
        </Stack>
        <Stack flexGrow={1} alignItems={"center"}>
          <TitleCard playerId={playerId} title={layerView?.title} />
          <Stack flexGrow={1} justifyContent={"center"} alignItems={"center"}>
            {layerView?.main}
          </Stack>
          <Stack>{layerView?.footer}</Stack>
        </Stack>
        <Stack justifyContent={"center"} >
          {layerView?.sideRight}
        </Stack>
      </Stack>
    </>
  );
};
