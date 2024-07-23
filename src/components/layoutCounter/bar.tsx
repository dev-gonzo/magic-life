import { IconButton, Stack } from "@mui/material";
import { FaTrashAlt, FaUserFriends } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { RollDice } from "../../@types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const Bar = ({ rollDice }: RollDice) => {
  const navigate = useNavigate();
  const { initGame, players } = useGamePlayers();
  return (
    <>
      <>
        <Stack
          justifyContent={"space-around"}
          alignItems={"center"}
          padding={0.5}
        >
          <IconButton
            aria-label="add"
            size="small"
            onClick={() => {
              initGame(players?.length);
            }}
            sx={{ transform: "rotate(270deg)" }}
          >
            <FaRepeat size={17} color="white" />
          </IconButton>

          <IconButton
            aria-label="add"
            size="small"
            onClick={() => {
              navigate("/clear-config");
            }}
            sx={{ transform: "rotate(270deg)" }}
          >
            <FaTrashAlt size={17} color="white" />
          </IconButton>

          <IconButton
            aria-label="add"
            size="small"
            onClick={() => rollDice()}
            sx={{ transform: "rotate(270deg)" }}
          >
            <GiDiceTwentyFacesTwenty size={17} color="white" />
          </IconButton>
          <IconButton
            aria-label="add"
            size="small"
            onClick={() => navigate("/magic-life/players")}
            sx={{ transform: "rotate(270deg)" }}
          >
            <FaUserFriends size={17} color="white" />
          </IconButton>
        </Stack>
      </>
    </>
  );
};
