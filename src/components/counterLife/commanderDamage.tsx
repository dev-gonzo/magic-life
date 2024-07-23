import { Stack, Typography } from "@mui/material";
import { mana } from "../../data/mana";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Props } from "./types";


export const CommanderDamage = ({ playerId }: Props) => {
  const { getPlayer, addCommanderDamage, getConfigPlayer } = useGamePlayers();
  const player = getPlayer(playerId);
  const playerConfig = getConfigPlayer(playerId); 

  return (
    <Stack
      flexDirection={"row"}
      gap={0.5}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
    >
      {player?.commanderDamage?.map((item, index) => {
        const playerConfigDamage = getConfigPlayer(item?.player);
        return (
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
            bgcolor={
              playerConfigDamage?.color ? mana[playerConfigDamage.color]?.color : "#34495E"
            }
          >
            <Typography
              variant="body1"
              color={ playerConfig?.color
                ? mana[playerConfig?.color]?.contrast
                : "white"}
              fontWeight={"bold"}
              fontFamily={"monospace"}
              sx={{ textShadow: "1px 1px black" }}
              component={"span"}
            >
              {item?.damage}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
