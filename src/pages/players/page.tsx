import {
  Box,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaDisplay, FaMobileScreenButton } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { FaTimes } from "react-icons/fa";

export default function PagePlayers() {
  const navigate = useNavigate();
  const { initGame, toggleScreen, screen } = useGamePlayers();
  const [device, setDevice] = useState(screen);

  const handleDevice = (
    _: React.MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    if (value !== null && value !== "display") {
      setDevice("table");
      toggleScreen();
    }
    if (value !== null && value !== "table") {
      setDevice("display");
      toggleScreen();
    }
  };

  const orientation = (value?: string) => {
    return device === "table" ? value : undefined;
  };

  return (
    <>
      <Stack

        // flexDirection={"row"}
        // flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        height={"100vh"}
        bgcolor={"#1F2A38"}
      >
        <Stack
          padding={1}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          flexDirection={"row"}
        >
          <Box />
          <ToggleButtonGroup
            value={device}
            exclusive
            onChange={handleDevice}
            aria-label="device"
          >
            <ToggleButton
              value="table"
              aria-label="tv"
              sx={{
                backgroundColor: device === "table" ? "white" : "inherit",
                "&.Mui-selected": {
                  backgroundColor: "#34495E",
                  color: "black",
                },
              }}
            >
              <FaMobileScreenButton color="white" size={30} />
            </ToggleButton>
            <ToggleButton
              value="display"
              aria-label="laptop"
              sx={{
                backgroundColor: device === "display" ? "white" : "inherit",
                "&.Mui-selected": {
                  backgroundColor: "#34495E",
                  color: "black",
                },
              }}
            >
              <FaDisplay color="white" size={30} />
            </ToggleButton>
          </ToggleButtonGroup>

          <IconButton
            aria-label="add"
            size="small"
            onClick={() => navigate("/magic-life/counter")}
          >
            <FaTimes />
          </IconButton>
        </Stack>

        <Stack
          gap={2}
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          height={"100vh"}
          bgcolor={"#1F2A38"}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={5}
            bgcolor={"#34495E"}
            padding={2}
            onClick={() => {
              initGame(2);
              navigate("/magic-life/counter");
            }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <FaUser
              size={25}
              style={{
                transform: orientation("rotate(90deg)"),
              }}
            />
            <Typography variant="h4">2</Typography>
            <FaUser
              size={25}
              style={{ transform: orientation("rotate(270deg)") }}
            />
          </Stack>

          <Stack
            flexDirection={"row"}
            borderRadius={5}
            bgcolor={"#34495E"}
            padding={2}
            onClick={() => {
              initGame(3);
              navigate("/magic-life/counter");
            }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <FaUser size={25} />
            <FaUser size={25} />
            <FaUser size={25} />
            <Typography variant="h4">3</Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            borderRadius={5}
            bgcolor={"#34495E"}
            padding={2}
            onClick={() => {
              initGame(4);
              navigate("/magic-life/counter");
            }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Stack gap={1}>
              <FaUser
                size={25}
                style={{ transform: orientation("rotate(180deg)") }}
              />
              <FaUser size={25} />
            </Stack>
            <Typography variant="h4">4</Typography>
            <Stack gap={1}>
              <FaUser
                size={25}
                style={{ transform: orientation("rotate(180deg)") }}
              />
              <FaUser size={25} />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          gap={2}
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          height={"100vh"}
          bgcolor={"#1F2A38"}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={5}
            bgcolor={"#34495E"}
            padding={2}
            onClick={() => {
              initGame(5);
              navigate("/magic-life/counter");
            }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Stack gap={1}>
              <FaUser
                size={25}
                style={{ transform: orientation("rotate(180deg)") }}
              />
              <FaUser size={25} />
            </Stack>
            <Stack gap={1}>
              <FaUser
                size={25}
                style={{ transform: orientation("rotate(180deg)") }}
              />
              <FaUser size={25} />
            </Stack>
            <Stack gap={1}>
              <FaUser
                size={25}
                style={{ transform: orientation("rotate(270deg)") }}
              />
            </Stack>
            <Typography variant="h4">5</Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            borderRadius={5}
            bgcolor={"#34495E"}
            padding={2}
            onClick={() => {
              initGame(6);
              navigate("/magic-life/counter");
            }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Stack gap={1}>
              <FaUser
                size={25}
                style={{ transform: orientation("rotate(180deg)") }}
              />
              <FaUser size={25} />
            </Stack>
            <Stack gap={1}>
              <FaUser
                size={25}
                style={{ transform: orientation("rotate(180deg)") }}
              />
              <FaUser size={25} />
            </Stack>
            <Stack gap={1}>
              <FaUser
                size={25}
                style={{ transform: orientation("rotate(180deg)") }}
              />
              <FaUser size={25} />
            </Stack>

            <Typography variant="h4">6</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
