import { GiWingedSword } from "react-icons/gi";
import { FaInfinity } from "react-icons/fa";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { Stack, Typography } from "@mui/material";
import { checkDeathCommander } from "../../helpers/checkDeathCommander";
import { configCounter } from "../../data/configCounter";
import { defineSize } from "../../helpers/defineSize";

export const FooterDeath = ({ playerId }: { playerId: number }) => {
  const { updatePlayers, getPlayer, players } = useGamePlayers();
  const player = getPlayer(playerId);

  const checkDamage = () => {
    if (
      player?.infect > 9 ||
      checkDeathCommander(player?.commanderDamage) ||
      player?.life < 1
    ) {
      return false;
    }

    return true;
  };

  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
        {checkDamage() ? (
          <Stack alignItems={"center"}>
            <GiWingedSword
              color="white"
              size={configCounter.iconButton[defineSize(players.length)]}
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
        ) : null}

        <Stack alignItems={"center"}>
          <FaInfinity
            color="white"
            size={configCounter.iconButton[defineSize(players.length)]}
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
