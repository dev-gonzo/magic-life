import { IconButton, Stack, Typography } from "@mui/material";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const TitleCard = ({
  playerId,
  title,
}: {
  playerId: number;
  title?: string;
}) => {
  const navigate = useNavigate();
  const { getConfigPlayer } = useGamePlayers();
  const configPlayer = getConfigPlayer(playerId);
  return (
    <>
      <Stack direction={"row"} gap={0.3} alignItems={"center"} paddingTop={0.5}>
        {
          title ? (<Typography
            variant="overline"
            color={"white"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            sx={{ textShadow: "1px 1px black", lineHeight: 0 }}
            component={"span"}
            paddingTop={2}
          >
            {title}
          </Typography>) : (<> <Typography
            variant="overline"
            color={"white"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            sx={{ textShadow: "1px 1px black", lineHeight: 0 }}
            component={"span"}
          >
            {configPlayer?.playerName
              ? configPlayer?.playerName
              : `Player ${playerId}`}
          </Typography>
          <IconButton
            size="small"
            color="inherit"
            onClick={() =>
              navigate("/edit-player", { state: { playerId: playerId } })
            }
          >
            <FaUserEdit color="white" />
          </IconButton></>)
        }
       
      </Stack>
    </>
  );
};
