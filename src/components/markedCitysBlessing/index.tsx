import { Box, Stack, Typography } from "@mui/material";
import {
  GiMedievalGate
} from "react-icons/gi";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";

export const MarkedCitysBlessing = ({ playerId }: Props) => {
  const { getPlayer } = useGamePlayers();
  const player = getPlayer(playerId);

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Box textAlign={"center"}>
          <GiMedievalGate color="white" size={44} />
          <Typography
            variant="body1"
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={"monospace"}
            sx={{ textShadow: "1px 1px black" }}
          >
            {player?.citysBlessing
              ? "You have the city`s blessing"
              : "You removed the city`s blessing"}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
