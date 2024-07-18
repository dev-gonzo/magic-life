import { Button, Stack } from "@mui/material";

export const CommanderView = ({
  addCommanderDamage,
  minusCommanderDamage,
  commanderDamage,
  index,
}: {
  addCommanderDamage: (index: number) => void;
  minusCommanderDamage: (index: number ) => void;
  commanderDamage: number;
  index: number;
}) => {
  return (
    <>
      <Stack
        width={"50%"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button onClick={() => minusCommanderDamage(index)}>-</Button>
        {commanderDamage}
        <Button onClick={() => addCommanderDamage(index)}>+</Button>
      </Stack>
    </>
  );
};
