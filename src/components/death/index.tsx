import { Stack } from "@mui/material";
import { FaSkullCrossbones } from "react-icons/fa";

import { IoCloseCircle } from "react-icons/io5";

export const Death = ({ revivePlayer }: { revivePlayer: () => void }) => {
  return (
    <>
      <Stack
        bgcolor={"blue"}
        width={"25%"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid #fff"}
      >
        <Stack
          width={"25%"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          flexGrow={1}
        >
          <FaSkullCrossbones size={60} />
        </Stack>
        <Stack
          paddingY={1}
          flexWrap={"nowrap"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={0.5}
          onClick={() => revivePlayer()}
        >
          <IoCloseCircle />
        </Stack>
      </Stack>
    </>
  );
};
