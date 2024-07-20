import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FaCircleXmark } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { ColorMagic } from "../../@types";
import { bgMagic } from "../../data/background";
import { mana } from "../../data/mana";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { useState } from "react";

export const PageEditPlayer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const playerId = location?.state?.playerId;
  const { getConfigPlayer, saveConfigPlayers } = useGamePlayers();
  const playerConfig = getConfigPlayer(playerId);
  const [playerName, setPlayerName] = useState(playerConfig?.playerName || "");

  return (
    <>
      <Stack height={"100vh"} bgcolor={"#1F2A38"} padding={2}>
        <Stack
          flexGrow={1}
          borderRadius={3}
          bgcolor={"#34495E"}
          justifyContent={"space-between"}
        >
          <Stack padding={2} flexGrow={1} display={"flex"} gap={1}>
            <Stack>
              <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
                Player {playerId}
              </Typography>
            </Stack>
            <Stack flexDirection={"row"} gap={2}>
              <TextField
                name="playerName"
                value={playerName}
                onChange={(e) => {
                  setPlayerName(e?.target?.value);
                  saveConfigPlayers({
                    ...playerConfig,
                    player: playerId,
                    playerName: e?.target?.value,
                  });
                }}
                variant="standard"
                size="small"
                placeholder="Player name"
                sx={{ width: "70%" }}
              />

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={playerConfig?.parther}
                      value={playerConfig?.parther}
                      onChange={() => {
                        saveConfigPlayers({
                          ...playerConfig,
                          player: playerId,
                          parther: !playerConfig?.parther,
                        });
                      }}
                    />
                  }
                  label="Commander Parther"
                />
              </FormGroup>
            </Stack>
            <Stack paddingBottom={2}>
              <Stack flexDirection={"row"} flexWrap={"wrap"} height={"38px"}>
                {Object.entries(mana).map(([key, value]) => (
                  <IconButton
                    key={`mana-magic-${key}`}
                    onClick={() =>
                      saveConfigPlayers({
                        ...playerConfig,
                        player: playerId,
                        color:
                          playerConfig?.color == key
                            ? undefined
                            : (key as ColorMagic),
                        bgMagic: undefined,
                      })
                    }
                  >
                    <Stack
                      height={"35px"}
                      width={"35px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        sx={{
                          border:
                            playerConfig?.color == key
                              ? "2px solid #13111A"
                              : undefined,
                        }}
                        height={playerConfig?.color == key ? "34px" : "30px"}
                        width={playerConfig?.color == key ? "34px" : "30px"}
                        borderRadius={50}
                        bgcolor={value?.color}
                      >
                        {value?.icon ? (
                          <img
                            src={value?.icon}
                            alt={value?.color}
                            width={"30px"}
                          />
                        ) : null}
                      </Box>
                    </Stack>
                  </IconButton>
                ))}
              </Stack>
            </Stack>
            <Stack flexGrow={1}>
              <Stack flexDirection={"row"} gap={2}>
                {playerConfig?.color && mana[playerConfig.color]?.icon ? (
                  <>
                    {Object?.values(bgMagic[playerConfig.color])?.map(
                      (item) => (
                        <Box
                          key={`img-arts-magic-${item}`}
                          border={
                            playerConfig?.bgMagic == item
                              ? "2px solid #13111A"
                              : undefined
                          }
                          borderRadius={3}
                          width={"80px"}
                          height={"80px"}
                          sx={{
                            backgroundImage: `url(${item})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          onClick={() => {
                            saveConfigPlayers({
                              ...playerConfig,
                              player: playerId,
                              bgMagic: item,
                            });
                          }}
                        />
                      )
                    )}
                  </>
                ) : null}
              </Stack>
            </Stack>
          </Stack>
          <IconButton onClick={() => navigate("/counter")}>
            <FaCircleXmark size={22} color="black" />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};
