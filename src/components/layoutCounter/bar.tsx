import { Stack } from "@mui/material";
import { FaTrashAlt, FaUserFriends } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";


export const Bar = () => {
  const navigate = useNavigate();
  const { initGame, players } = useGamePlayers();
  return (
    <>
      <>
        <Stack justifyContent={"space-around"} alignItems={"center"} padding={0.5}>
          <Stack
            borderRadius={50}
            width={22}
            height={22}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(270deg)" }}
            color={"white"}
            onClick={() => {
              initGame(players?.length);
            }}
            
          >
            <FaRepeat size={17} />
          </Stack>
          <Stack
            borderRadius={50}
            width={22}
            height={22}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(270deg)" }}
            color={"white"}
            onClick={ () => {
              navigate("/clear-config")
            }}
          >
            <FaTrashAlt size={17} />
          </Stack>
          <Stack
            borderRadius={50}
            width={22}
            height={22}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(270deg)" }}
            color={"white"}
          >
            <GiDiceTwentyFacesTwenty size={17} />
          </Stack>
          <Stack
            borderRadius={50}
            width={22}
            height={22}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(270deg)" }}
            color={"white"}
            onClick={() => navigate("/players")}
          >
            <FaUserFriends size={17} />
          </Stack>
        </Stack>
      </>
    </>
  );
};
