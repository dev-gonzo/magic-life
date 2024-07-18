import { Stack } from "@mui/material";
import { FaUserFriends } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { useCounterLife } from "../../storeds/useThemeMode/useCounterLife";
import { useNavigate } from "react-router-dom";

export const Bar = () => {
  const navigate = useNavigate();
  const { initGame, players } = useCounterLife();
  return (
    <>
      <>
        <Stack justifyContent={"center"} alignItems={"center"} padding={0.5}>
          <Stack
            borderRadius={50}
            width={40}
            height={40}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(270deg)" }}
            color={"white"}
            onClick={() => {
              initGame(players?.length);
            }}
          >
            <FaRepeat size={25} />
          </Stack>
          <Stack
            borderRadius={50}
            width={40}
            height={40}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(90deg)" }}
            color={"white"}
            bgcolor={"gray"}
          >
            <MdMenu size={25} />
          </Stack>
          <Stack
            borderRadius={50}
            width={40}
            height={40}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(270deg)" }}
            color={"white"}
            onClick={() => navigate("/players")}
          >
            <FaUserFriends size={25} />
          </Stack>
        </Stack>
      </>
    </>
  );
};
