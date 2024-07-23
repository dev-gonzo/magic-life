import { IconButton, Stack, Typography } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";


export const PageClearPlayers = () => {
  const navigate = useNavigate();
  const {players, resetConfigPlayers, initGame } = useGamePlayers();

  return (
    <>
      <Stack height={"100vh"} bgcolor={"#1F2A38"} padding={2}>
        <Stack
          flexGrow={1}
          borderRadius={3}
          bgcolor={"#34495E"}
          justifyContent={"space-between"}
        >
          <Stack padding={2} flexGrow={1} display={"flex"} gap={1}>
            <Stack>
              <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
                Clear players settings
              </Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                textAlign={"center"}
              >
                Do you want to clear players information?
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-around"}>
            <IconButton
              onClick={() => {
                initGame(players?.length)
                resetConfigPlayers();
                navigate("/magic-life/counter");
              }}
            >
              <FaCheck size={30} color="black" />
            </IconButton>
            <IconButton onClick={() => navigate("/magic-life/counter")}>
              <RiCloseCircleFill size={30} color="black" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
