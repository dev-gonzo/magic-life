import { Box, Button, Stack, Typography } from "@mui/material";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { useCounterLife } from "../../storeds/useThemeMode/useCounterLife";
import { Props } from "./types";

export const CounterTemp = ({ icon, setValue, value }: Props) => {
  const { showTemp } = useCounterLife();

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"}>
        {icon}
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Box>
            <Button onClick={() => setValue("minus")} sx={{ color: "white" }}>
              <TbArrowBadgeLeftFilled size={40} />
            </Button>
          </Box>
          <Box>
            <Typography
              variant="h3" /// tamanho font
              color={"white"}
              fontWeight={"bold"}
              fontFamily={"monospace"}
              sx={{ textShadow: "2px 2px black" }}
            >
              {value}
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => setValue("add")}
              sx={{ color: "white", textShadow: "2px 2px black" }}
            >
              <TbArrowBadgeRightFilled size={40} />
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
