import { Box, Button, Stack, Typography } from "@mui/material";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";

export const CounterDamage = ({ playerId }: Props) => {
  const { players, getPlayer, subCommanderDamage, addCommanderDamage } =
    useGamePlayers();
  const player = getPlayer(playerId);

  return (
    <>
      {players?.map((item) => {
        const commander = player?.commanderDamage?.find(
          (element) => element?.player == item?.player
        );
        return (
          <>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
            >
              <Box>
                <Button
                  onClick={() => subCommanderDamage(playerId, item?.player, 1)}
                  sx={{ color: "white" }}
                >
                  <FaMinusCircle size={22} />
                </Button>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  color={player?.life ? "white" : "red"}
                  fontWeight={"bold"}
                  fontFamily={"monospace"}
                  sx={{ textShadow: "2px 2px black" }}
                >
                  {commander?.damage ?? 0}
                </Typography>
              </Box>
              <Box>
                <Button
                  onClick={() => addCommanderDamage(playerId, item?.player, 1)}
                  sx={{ color: "white", textShadow: "2px 2px black" }}
                >
                  <FaPlusCircle size={22} />
                </Button>
              </Box>
            </Stack>
          </>
        );
      })}
    </>
  );
};
