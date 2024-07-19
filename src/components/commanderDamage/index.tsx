import { Stack } from "@mui/material";
import { Props } from "./types";
import { useCommanderDamage } from "./useCommanderDamage";
import { CounterDamage } from "./counterDamage";

export const CommanderDamage = ({ playerId }: Props) => {
  const { listCommander } = useCommanderDamage(playerId);

  return (
    <>
      {listCommander?.map((item) => (
        <Stack borderRadius={2} overflow={"hidden"}>
          <CounterDamage
            playerId={playerId}
            playerCommander={item?.playerCommander}
            commanderId={1}
            damage={item?.damageCommander1}
          />
          {item?.damageCommander2 !== undefined ? (
            <CounterDamage
              playerId={playerId}
              playerCommander={item?.playerCommander}
              commanderId={2}
              damage={item?.damageCommander2}
            />
          ) : null}
        </Stack>
      ))}
    </>
  );
};
