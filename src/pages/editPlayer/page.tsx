import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FaCircleXmark } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { bgMagic } from "../../data/background";
import { mana } from "../../data/mana";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export const PageEditPlayer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const playerId = location?.state?.playerId;
  const { getConfigPlayer, saveConfigPlayers } = useGamePlayers();
  const playerConfig = getConfigPlayer(playerId);

  return (
    <>
      <Stack height={"100vh"} bgcolor={"#1F2A38"} padding={2}>
        <Stack
          flexGrow={1}
          borderRadius={3}
          bgcolor={"#34495E"}
          justifyContent={"space-between"}
        >
          <Grid container padding={2} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
                Player {playerId}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                name="playerName"
                value={playerConfig?.playerName}
                onChange={(e) => {
                  saveConfigPlayers({
                    ...playerConfig,
                    player: playerId,
                    playerName: e?.target?.value,
                  });
                }}
                variant="standard"
                size="small"
                placeholder="Player name"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={12}>
              <Stack flexDirection={"row"}>
                <IconButton
                  onClick={() =>
                    saveConfigPlayers({
                      ...playerConfig,
                      player: playerId,
                      color:
                        playerConfig?.color == "plains" ? undefined : "plains",
                      bgMagic: undefined,
                    })
                  }
                >
                  <Box
                    sx={{
                      border:
                        playerConfig?.color == "plains"
                          ? "2px solid black"
                          : undefined,
                    }}
                    height={"34px"}
                    width={"34px"}
                    borderRadius={50}
                  >
                    <img src={mana?.plains} alt="white" width={"30px"} />
                  </Box>
                </IconButton>
                <IconButton
                  onClick={() =>
                    saveConfigPlayers({
                      ...playerConfig,
                      player: playerId,
                      color:
                        playerConfig?.color == "island" ? undefined : "island",
                      bgMagic: undefined,
                    })
                  }
                >
                  <Box
                    sx={{
                      border:
                        playerConfig?.color == "island"
                          ? "2px solid black"
                          : undefined,
                    }}
                    height={"34px"}
                    width={"34px"}
                    borderRadius={50}
                  >
                    <img src={mana?.island} alt="blue" width={"30px"} />
                  </Box>
                </IconButton>
                <IconButton
                  onClick={() =>
                    saveConfigPlayers({
                      ...playerConfig,
                      player: playerId,
                      color:
                        playerConfig?.color == "swamp" ? undefined : "swamp",
                      bgMagic: undefined,
                    })
                  }
                >
                  <Box
                    sx={{
                      border:
                        playerConfig?.color == "swamp"
                          ? "2px solid black"
                          : undefined,
                    }}
                    height={"34px"}
                    width={"34px"}
                    borderRadius={50}
                  >
                    <img src={mana?.swamp} alt="Swamp" width={"30px"} />
                  </Box>
                </IconButton>
                <IconButton
                  onClick={() =>
                    saveConfigPlayers({
                      ...playerConfig,
                      player: playerId,
                      color:
                        playerConfig?.color == "mountain"
                          ? undefined
                          : "mountain",
                      bgMagic: undefined,
                    })
                  }
                >
                  <Box
                    sx={{
                      border:
                        playerConfig?.color == "mountain"
                          ? "2px solid black"
                          : undefined,
                    }}
                    height={"34px"}
                    width={"34px"}
                    borderRadius={50}
                  >
                    <img src={mana?.mountain} alt="mountain" width={"30px"} />
                  </Box>
                </IconButton>
                <IconButton
                  onClick={() =>
                    saveConfigPlayers({
                      ...playerConfig,
                      player: playerId,
                      color:
                        playerConfig?.color == "forest" ? undefined : "forest",
                      bgMagic: undefined,
                    })
                  }
                >
                  <Box
                    sx={{
                      border:
                        playerConfig?.color == "forest"
                          ? "2px solid black"
                          : undefined,
                    }}
                    height={"34px"}
                    width={"34px"}
                    borderRadius={50}
                  >
                    <img src={mana?.forest} alt="forest" width={"30px"} />
                  </Box>
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack flexDirection={"row"} gap={2}>
                {playerConfig?.color ? (
                  <>
                    {Object.values(bgMagic[playerConfig.color])?.map((item) => (
                      <Box
                        border={
                          playerConfig?.bgMagic == item
                            ? "2px solid black"
                            : undefined
                        }
                        width={"80px"}
                        height={"80px"}
                        bgcolor={"red"}
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
                    ))}
                  </>
                ) : null}
              </Stack>
            </Grid>
          </Grid>
          <IconButton onClick={() => navigate("/counter")}>
            <FaCircleXmark size={22} color="black" />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};
