import { CommanderDamage } from "../commanderDamage";
import { Death } from "../death";
import { LifeCounter } from "../lifeCounter";
import { Props } from "./types";
import { useCouterIndividual } from "./useCouterIndividual";

export const CounterIndividual = ({
  direction,
  inverse,
  player,
  outerConter,
}: Props) => {
  const counter = useCouterIndividual(player);

  if (counter?.playerDeath) {
    return <Death revivePlayer={counter.revivePlayer} />;
  }

  return (
    <>
      {counter?.layerView == "life" ? (
        <>
          <LifeCounter
            counter={counter}
            direction={direction}
            inverse={inverse}
            playerNumber={player}
            outerConter={outerConter}
          />
        </>
      ) : (
        <CommanderDamage counter={counter} />
      )}
    </>
  );
};
