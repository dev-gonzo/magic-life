import { Stack } from "@mui/material";
import { CounterDamage } from "./counterDamage";
import { Props } from "./types";
import { useCommanderDamage } from "./useCommanderDamage";

export const CommanderDamage = ({ playerId }: Props) => {
  const { listCommander } = useCommanderDamage(playerId);

  return (
    <>
      {listCommander?.map((item, index) => (
        <Stack
          borderRadius={2}
          overflow={"hidden"}
          key={`commander-damage-${index}`}
        >
          <CounterDamage
            playerId={playerId}
            playerCommander={item?.playerCommander}
            commanderId={1}
            damage={item?.damageCommander1}
            key={`commander-damage-${index}-1`}
          />
          {item?.damageCommander2 !== undefined ? (
            <CounterDamage
              playerId={playerId}
              playerCommander={item?.playerCommander}
              commanderId={2}
              damage={item?.damageCommander2}
              key={`commander-damage-${index}=2`}
            />
          ) : null}
        </Stack>
      ))}
    </>
  );
};
