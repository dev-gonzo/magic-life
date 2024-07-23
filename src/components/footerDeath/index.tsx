import { IconButton, Stack, Typography } from "@mui/material";
import { FaInfinity } from "react-icons/fa";
import { GiWingedSword } from "react-icons/gi";
import { configCounter } from "../../data/configCounter";
import { mana } from "../../data/mana";
import { checkDeathCommander } from "../../helpers/checkDeathCommander";
import { defineSize } from "../../helpers/defineSize";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const FooterDeath = ({ playerId }: { playerId: number }) => {
  const { updatePlayers, getPlayer, players, getConfigPlayer } =
    useGamePlayers();
  const player = getPlayer(playerId);
  const playerConfig = getConfigPlayer(playerId);

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

  const color =
    playerConfig?.color && !playerConfig?.bgMagic
      ? mana[playerConfig?.color]?.contrast
      : "white";


  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
        {checkDamage() ? (
          <Stack alignItems={"center"}>
            <IconButton
              aria-label="add"
              size="small"
              onClick={() =>
                updatePlayers({
                  ...player,
                  loses: false,
                  immmortal: false,
                })
              }
            >
              <GiWingedSword
                color={color
                }
                size={configCounter.iconButton[defineSize(players.length)]}
              />
            </IconButton>

            <Typography
              variant="body1"
              color={color
              }
              fontWeight={"bold"}
              textAlign={"center"}
              fontFamily={"monospace"}
              fontSize={9}
            >
              Continue in the game
            </Typography>
          </Stack>
        ) : null}

        <Stack alignItems={"center"}>
          <IconButton
            aria-label="add"
            size="small"
            onClick={() =>
              updatePlayers({
                ...player,
                loses: false,
                immmortal: true,
              })
            }
          >
            <FaInfinity
              color={color
              }
              size={configCounter.iconButton[defineSize(players.length)]}
            />
          </IconButton>

          <Typography
            variant="body1"
            color={color
            }
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={"monospace"}
            fontSize={9}
          >
            You can not lose
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
