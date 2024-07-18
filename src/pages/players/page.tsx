import { Stack, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { useCounterLife } from "../../storeds/useThemeMode/useCounterLife";
import { useNavigate } from "react-router-dom";

export default function PagePlayers() {
  const navigate = useNavigate();
  const { initGame } = useCounterLife();

  return (
    <>
      <Stack
        gap={3}
        flexDirection={"row"}
        padding={2}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100vh"}
        bgcolor={"black"}
      >
        <Stack
          flexDirection={"row"}
          borderRadius={20}
          bgcolor={"gray"}
          padding={2}
          onClick={() => {
            initGame(2);
            navigate("/counter");
          }}
        >
          <FaUser size={50} />
          <FaUser size={50} />
          <Typography variant="h4">2</Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={20}
          bgcolor={"gray"}
          padding={2}
          onClick={() => {
            initGame(3);
            navigate("/counter");
          }}
        >
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <Typography variant="h4">3</Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={20}
          bgcolor={"gray"}
          padding={2}
          onClick={() => {
            initGame(4);
            navigate("/counter");
          }}
        >
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <Typography variant="h4">4</Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={20}
          bgcolor={"gray"}
          padding={2}
          onClick={() => {
            initGame(5);
            navigate("/counter");
          }}
        >
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <Typography variant="h4">5</Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={20}
          bgcolor={"gray"}
          padding={2}
          onClick={() => {
            initGame(6);
            navigate("/counter");
          }}
        >
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <Typography variant="h4">6</Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={20}
          bgcolor={"gray"}
          padding={2}
          onClick={() => {
            initGame(7);
            navigate("/counter");
          }}
        >
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <Typography variant="h4">7</Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          borderRadius={20}
          bgcolor={"gray"}
          padding={2}
          onClick={() => {
            initGame(8);
            navigate("/counter");
          }}
        >
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <FaUser size={50} />
          <Typography variant="h4">8</Typography>
        </Stack>
      </Stack>
    </>
  );
}
