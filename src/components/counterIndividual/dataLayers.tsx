import { CounterCommanderTax } from "../counterCommandeTax";
import { CounterEnergy } from "../counterEnergy";
import { CounterExperience } from "../counterExperience";
import { CounterInfect } from "../counterInfect";
import { CounterLife } from "../counterLife";
import { CounterRad } from "../counterRad";
import { FooterCommander } from "../footerCommander";
import { MarkedCitysBlessing } from "../markedCitysBlessing";
import { MarkedMonarchs } from "../markedMonarch";
import { MoreCounter } from "../moreCounter";
import { OutherCounter } from "../outherCounter";

export const dataLayers = (playerId: number) => {
  return {
    life: {
      title: undefined,
      main: <CounterLife playerId={playerId} />,
      footer: <FooterCommander playerId={playerId}/>,
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
    monarch: {
      title: "City`s Blessing",
      main: <MarkedMonarchs playerId={playerId} />,
      footer: <></>,
      sideLeft: <MoreCounter playerId={playerId} direction="left" />,
      sideRight: <OutherCounter playerId={playerId} direction="right" />,
    },
  };
};
