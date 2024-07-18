import { Stack, Typography } from "@mui/material";
import { BsShieldFillPlus } from "react-icons/bs";
import { FaRadiation } from "react-icons/fa6";
import { GiRollingDices } from "react-icons/gi";
import { LeftRight } from "../LeftRight";
import Phyrexia from "../../assets/phyrexa.svg";

export const OutherCounter = ({
  direction,
}: {
  direction: "left" | "right";
}) => {
  return (
    <Stack
      paddingY={1}
      flexWrap={"nowrap"}
      alignItems={"flex-end"}
      gap={2}
      color={"white"}
      padding={1}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              2
            </Typography>
          }
          Icon={<BsShieldFillPlus size={22} />}
        />
      </Stack>

      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              2
            </Typography>
          }
          Icon={
            <img src={Phyrexia} width={30} height={25} style={{ margin: -4 }} />
          }
        />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              2
            </Typography>
          }
          Icon={<FaRadiation size={22} />}
        />
      </Stack>

      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <GiRollingDices size={22} />
      </Stack>
    </Stack>
  );
};
