import { IconButton, Stack, Typography } from "@mui/material";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { BiSolidMedal } from "react-icons/bi";
import { mana } from "../../data/mana";

export const TitleCard = ({
  playerId,
  title,
}: {
  playerId: number;
  title?: string;
}) => {
  const navigate = useNavigate();
  const { getConfigPlayer, getPlayer } = useGamePlayers();
  const playerConfig = getConfigPlayer(playerId);
  const player = getPlayer(playerId);

  const color =
    playerConfig?.color && !playerConfig?.bgMagic
      ? mana[playerConfig?.color]?.contrast
      : "white";

  return (
    <>
      <Stack direction={"row"} gap={0.3} alignItems={"center"} paddingTop={0.5}>
        {title ? (
          <Typography
            variant="overline"
            color={color}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            component={"span"}
            paddingTop={0.5}
          >
            {title}
          </Typography>
        ) : (
          <>
            {player?.sorted ? <BiSolidMedal color={color} /> : null}

            <Typography
              variant="overline"
              color={color}
              fontWeight={"bold"}
              fontFamily={"monospace"}
              component={"span"}
              marginLeft={0.8}
            >
              {playerConfig?.playerName
                ? playerConfig?.playerName
                : `Player ${playerId}`}
            </Typography>
            <IconButton
              size="small"
              onClick={() =>
                navigate("/magic-life/edit-player", { state: { playerId: playerId } })
              }
            >
              <FaUserEdit color={color} />
            </IconButton>
          </>
        )}
      </Stack>
    </>
  );
};
