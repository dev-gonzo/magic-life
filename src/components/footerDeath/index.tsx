import { GiWingedSword } from "react-icons/gi";
import { FaInfinity } from "react-icons/fa";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Stack, Typography } from "@mui/material";

export const FooterDeath = ({ playerId }: { playerId: number }) => {
  const { updatePlayers, getPlayer } = useGamePlayers();
  const player = getPlayer(playerId);

  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
        <Stack alignItems={"center"}>
          <GiWingedSword
            color="white"
            size={30}
            onClick={() =>
              updatePlayers({
                ...player,
                loses: false,
                immmortal: false,
              })
            }
          />
          <Typography
            variant="body1"
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={"monospace"}
            sx={{ textShadow: "1px 1px black" }}
            fontSize={9}
          >
            Continue in the game
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <FaInfinity
            color="white"
            size={30}
            onClick={() =>
              updatePlayers({
                ...player,
                loses: false,
                immmortal: true,
              })
            }
          />
          <Typography
            variant="body1"
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={"monospace"}
            sx={{ textShadow: "1px 1px black" }}
            fontSize={9}
          >
            You can not lose
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
