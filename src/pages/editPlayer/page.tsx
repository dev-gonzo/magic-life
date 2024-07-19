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
import { mana } from "../../data/mana";
import { bgMagic } from "../../data/background";
import { useEffect, useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const PageEditPlayer = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<{
    name: string;
    parther: boolean;
    color: undefined | "plains" | "island" | "swamp" | "mountain" | "forest";
    bgMagic: undefined | string;
  }>({
    name: "",
    parther: false,
    color: undefined,
    bgMagic: undefined,
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

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
                Player 1
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="playerName"
                value={form?.name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    name: e?.target?.value,
                  });
                }}
                variant="standard"
                size="small"
                placeholder="Player name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={form?.parther}
                      value={form?.parther}
                      onChange={() => {
                        setForm({ ...form, parther: !form?.parther });
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
                    setForm({
                      ...form,
                      color: form?.color == "plains" ? undefined : "plains",
                      bgMagic: undefined,
                    })
                  }
                >
                  <img src={mana?.plains} alt="white" width={"30px"} />
                </IconButton>
                <IconButton
                  onClick={() =>
                    setForm({
                      ...form,
                      color: form?.color == "island" ? undefined : "island",
                      bgMagic: undefined,
                    })
                  }
                >
                  <Box
                    sx={{ border: "2px solid white" }}
                    height={"34px"}
                    width={"34px"}
                    borderRadius={50}
                  >
                    <img src={mana?.island} alt="blue" width={"30px"} />
                  </Box>
                </IconButton>
                <IconButton
                  onClick={() =>
                    setForm({
                      ...form,
                      color: form?.color == "swamp" ? undefined : "swamp",
                      bgMagic: undefined,
                    })
                  }
                >
                  <img src={mana?.swamp} alt="Swamp" width={"30px"} />
                </IconButton>
                <IconButton
                  onClick={() =>
                    setForm({
                      ...form,
                      color: form?.color == "mountain" ? undefined : "mountain",
                      bgMagic: undefined,
                    })
                  }
                >
                  <img src={mana?.mountain} alt="mountain" width={"30px"} />
                </IconButton>
                <IconButton
                  onClick={() =>
                    setForm({
                      ...form,
                      color: form?.color == "forest" ? undefined : "forest",
                      bgMagic: undefined,
                    })
                  }
                >
                  <img src={mana?.forest} alt="forest" width={"30px"} />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack flexDirection={"row"} gap={2}>
                {form?.color ? (
                  <>
                    {Object.values(bgMagic[form.color])?.map((item) => (
                      <Box
                        border={
                          form?.bgMagic == item ? "2px solid blue" : undefined
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
                          setForm({
                            ...form,
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
