import { Stack } from "@mui/material";
import { IoCloseCircle } from "react-icons/io5";
import { Counter } from "../../@types";
import { CommanderView } from "./commanderView";

export const CommanderDamage = ({ counter }: { counter: Counter }) => {
  const { player, setLayerView, addCommanderDamage, minusCommanderDamage } =
    counter;

  return (
    <>
      <Stack
        bgcolor={"orange"}
        width={"25%"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid #fff"}
      >
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
          flexWrap={"wrap"}
        >
          {player?.commanderDamage?.map((damage, index) => (
            <CommanderView
              addCommanderDamage={addCommanderDamage}
              minusCommanderDamage={minusCommanderDamage}
              index={index}
              commanderDamage={damage}
              key={`commander-view-${index}`}
            />
          ))}
        </Stack>
        <Stack
          paddingY={1}
          flexWrap={"nowrap"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={0.5}
          onClick={() => setLayerView("life")}
        >
          <IoCloseCircle />
        </Stack>
      </Stack>
    </>
  );
};
