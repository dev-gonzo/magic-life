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
import { ColorMagic } from "../../@types";

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
          <Grid container padding={2} spacing={1} flexGrow={1} display={"flex"}>
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
              <Stack
                flexDirection={"row"}
                flexWrap={"wrap"}
                height={"38px"}
                justifyItems={"center"}
              >
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
                          <img src={value?.icon} alt="white" width={"30px"} />
                        ) : null}
                      </Box>
                    </Stack>
                  </IconButton>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} flexGrow={1}>
              <Stack flexDirection={"row"} gap={2}>
                {playerConfig?.color &&
                playerConfig.color != "waste" &&
                mana[playerConfig.color]?.icon ? (
                  <>
                    {Object?.values(bgMagic[playerConfig.color])?.map(
                      (item) => (
                        <Box
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
