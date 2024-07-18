import { Typography } from "@mui/material";
import { CounterEnergy } from "../counterEnergy";
import { CounterLife } from "../counterLife";
import { MoreCounter } from "../moreCounter";
import { OutherCounter } from "../outherCounter";
import { CounterInfect } from "../counterInfect";
import { CounterExperience } from "../counterExperience";
import { CounterCommanderTax } from "../counterCommandeTax";
import { CounterRad } from "../counterRad";
import { MarkedCitysBlessing } from "../markedCitysBlessing";

export const dataLayers = (playerId: number) => {
  return {
    life: {
      title: `Player ${playerId}`,
      main: <CounterLife playerId={playerId} />,
      footer: <Typography color={"white"}>footer</Typography>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter playerId={playerId} direction="right" />,
    },
    energy: {
      title: `Energy Counter`,
      main: <CounterEnergy playerId={playerId} />,
      footer: <></>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter playerId={playerId} direction="right" />,
    },
    infect: {
      title: `Infect Counter`,
      main: <CounterInfect playerId={playerId} />,
      footer: <></>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter playerId={playerId} direction="right" />,
    },
    experience: {
      title: `Experience Counter`,
      main: <CounterExperience playerId={playerId} />,
      footer: <></>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter playerId={playerId} direction="right" />,
    },
    commanderTax: {
      title: `CommanderTax Counter`,
      main: <CounterCommanderTax playerId={playerId} />,
      footer: <></>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter playerId={playerId} direction="right" />,
    },
    rad: {
      title: `Rad Counter`,
      main: <CounterRad playerId={playerId} />,
      footer: <></>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter playerId={playerId} direction="right" />,
    },
    citysBlessing: {
      title: "City`s Blessing",
      main: <MarkedCitysBlessing playerId={playerId} />,
      footer: <></>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter playerId={playerId} direction="right" />,
    },
  };
};
