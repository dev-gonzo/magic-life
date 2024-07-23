import { Stack, Typography } from "@mui/material";
import { FaSkullCrossbones } from "react-icons/fa";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { mana } from "../../data/mana";

export const Death = ({ playerId }: { playerId: number }) => {
  const { getConfigPlayer } = useGamePlayers();
  const playerConfig = getConfigPlayer(playerId);


  const color =
    playerConfig?.color && !playerConfig?.bgMagic
      ? mana[playerConfig?.color]?.contrast
      : "white";

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          flexGrow={1}
          gap={1}
        >
          <FaSkullCrossbones size={50} color={color} />
          <Typography
            variant="subtitle2"
            color={color}
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={"monospace"}
          >
            Congratulations you lost!
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
