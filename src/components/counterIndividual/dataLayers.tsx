import { Typography } from "@mui/material";
import { CounterLife } from "../counterLife";
import { MoreCounter } from "../moreCounter";
import { OutherCounter } from "../outherCounter";
import { CounterEnergy } from "../counterEnergy";

export const dataLayers = (playerId: number) => {
  return {
    life: {
      title: `Player ${playerId}`,
      main: <CounterLife playerId={playerId} />,
      footer: <Typography color={"white"}>footer</Typography>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter direction="right" />,
    },
    energy: {
      title: `Energy Counter`,
      main: <CounterEnergy playerId={playerId} />,
      footer: <Typography color={"white"}>footer</Typography>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter direction="right" />,
    },
  };
};
