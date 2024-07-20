import { Stack, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { useNavigate } from "react-router-dom";

export default function PagePlayers() {
  const navigate = useNavigate();
  const { initGame } = useGamePlayers();

  return (
    <>
      <Stack
        gap={3}
        flexDirection={"row"}
        padding={2}
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
            navigate("/counter");
          }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <FaUser size={50} style={{ transform: "rotate(90deg)" }} />
          <Typography variant="h4">2</Typography>
          <FaUser size={50} style={{ transform: "rotate(270deg)" }} />
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={5}
          bgcolor={"#34495E"}
          padding={2}
          onClick={() => {
            initGame(3);
            navigate("/counter");
          }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <Typography variant="h4">3</Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={5}
          bgcolor={"#34495E"}
          padding={2}
          onClick={() => {
            initGame(4);
            navigate("/counter");
          }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <Stack>
            <FaUser size={50} style={{ transform: "rotate(90deg)" }} />
            <FaUser size={50} style={{ transform: "rotate(90deg)" }} />
          </Stack>
          <Typography variant="h4">4</Typography>
          <Stack>
            <FaUser size={50} style={{ transform: "rotate(270deg)" }} />
            <FaUser size={50} style={{ transform: "rotate(270deg)" }} />
          </Stack>
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={5}
          bgcolor={"#34495E"}
          padding={2}
          onClick={() => {
            initGame(5);
            navigate("/counter");
          }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <Stack gap={1}>
            <FaUser size={50} style={{ transform: "rotate(180deg)" }} />
            <FaUser size={50} />
          </Stack>
          <Stack gap={1}>
            <FaUser size={50} style={{ transform: "rotate(180deg)" }} />
            <FaUser size={50} />
          </Stack>
          <Stack gap={1}>
            <FaUser size={50} style={{ transform: "rotate(270deg)" }} />
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
            navigate("/counter");
          }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <Stack gap={1}>
            <FaUser size={50} style={{ transform: "rotate(180deg)" }} />
            <FaUser size={50} />
          </Stack>
          <Stack gap={1}>
            <FaUser size={50} style={{ transform: "rotate(180deg)" }} />
            <FaUser size={50} />
          </Stack>
          <Stack gap={1}>
            <FaUser size={50} style={{ transform: "rotate(180deg)" }} />
            <FaUser size={50} />
          </Stack>

          <Typography variant="h4">6</Typography>
        </Stack>
      </Stack>
    </>
  );
}
