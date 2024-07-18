import { Stack } from "@mui/material";
import { Props } from "./types";
import { useCouterIndividual } from "./useCouterIndividual";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { CounterDamage } from "../commanderDamage/counterDamage";

export const CounterIndividual = ({ playerId }: Props) => {
  const { layerView } = useCouterIndividual(playerId);
  const { getPlayer } = useGamePlayers();
  const player = getPlayer(playerId);

  if (player?.viewCommanderDamage) {
    return (
      <>
        <CounterDamage playerId={playerId} />
      </>
    );
  }

  return (
    <>
      <Stack
        height={"100%"}
        flexDirection={"row"}
        gap={0.5}
        bgcolor={"green"}
        borderRadius={3}
      >
        <Stack justifyContent={"center"} width={"20%"}>
          {layerView?.sideLeft}
        </Stack>
        <Stack bgcolor={"red"} flexGrow={1} alignItems={"center"}>
          <Stack>{layerView?.title}</Stack>
          <Stack flexGrow={1} justifyContent={"center"} alignItems={"center"}>
            {layerView?.main}
          </Stack>
          <Stack>{layerView?.footer}</Stack>
        </Stack>
        <Stack justifyContent={"center"} width={"20%"}>
          {layerView?.sideRight}
        </Stack>
      </Stack>
    </>
  );
};
