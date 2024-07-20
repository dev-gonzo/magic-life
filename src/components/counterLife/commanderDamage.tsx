import { Stack, Typography } from "@mui/material";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";

export const CommanderDamage = ({ playerId }: Props) => {
  const { getPlayer, addCommanderDamage, getConfigPlayer} = useGamePlayers();
  const player = getPlayer(playerId);

  return (
    <Stack
      flexDirection={"row"}
      gap={0.5}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
    >
      {player?.commanderDamage?.map((item,index) => (
        <Stack
        key={`commander-damage-${playerId}-${index}`}
          width={35}
          height={25}
          borderRadius={1.5}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => {
            addCommanderDamage(playerId, item?.player, item?.commander);
          }}
          sx={{
            backgroundImage: `url(${getConfigPlayer(item?.player)?.bgMagic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          bgcolor={getConfigPlayer(item?.player)?.color ? getConfigPlayer(item?.player)?.color: "#34495E"}
        >
          <Typography
            variant="body1"
            color={"white"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            sx={{ textShadow: "1px 1px black" }}
            component={"span"}
          >
            {item?.damage}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
