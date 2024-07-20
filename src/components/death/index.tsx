import { Stack, Typography } from "@mui/material";
import { FaSkullCrossbones } from "react-icons/fa";

export const Death = () => {
  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          flexGrow={1}
          gap={1}
        >
          <FaSkullCrossbones size={50} color="white" />
          <Typography
            variant="subtitle2"
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={"monospace"}
            sx={{ textShadow: "1px 1px black" }}
          >
            Congratulations you lost!
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
