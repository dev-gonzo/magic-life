import { Box, Button, Stack, Typography } from "@mui/material";
import { FaShieldHalved } from "react-icons/fa6";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { MoreCounter } from "../moreCounter";
import { OutherCounter } from "../outherCounter";
import { Props } from "./types";
import { useCounterLife } from "../../storeds/useThemeMode/useCounterLife";
import { CounterTemp } from "../counterTemp";
import { useEffect, useRef } from "react";

export const LifeCounter = ({
  counter,
  direction,
  inverse,
  outerConter,
  playerNumber,
}: Props) => {
  const {
    addLife,
    minusLife,
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
    deathByCommander,
  } = counter;

  const intervalRef: any = useRef(null);
  const { getPlayer, showTemp, closShowTemp } = useCounterLife();
  const player = getPlayer(playerNumber);

  useEffect(() => {
    if (showTemp?.timestamp) {
      const checkTimestamp = () => {
        if (new Date().getTime() > showTemp.timestamp) {
          closShowTemp();
        }
      };

      intervalRef.current = setInterval(checkTimestamp, 100);

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [showTemp, closShowTemp]);

  return (
    <>
      <Stack
        flexGrow={1}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        {outerConter == "left" ? (
          <OutherCounter direction="left" />
        ) : (
          <MoreCounter direction="left" playerId={counter?.playerNumber} />
        )}
        <Stack
          flexGrow={1}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"100%"}
          paddingY={1}
          sx={{
            transform:
              direction == "vertical"
                ? inverse
                  ? "rotate(270deg)"
                  : "rotate(90deg)"
                : inverse
                ? "rotate(180deg)"
                : undefined,
          }}
        >
          <Typography color={"white"}>Player</Typography>
          {showTemp?.playerId == playerNumber ? (
            <CounterTemp
              value={player?.energy}
              setValue={(value) => console.log(value)}
              icon={showTemp?.icon}
            />
          ) : (
            <Stack
              // flexGrow={1}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
            >
              <Box>
                <Button
                  onClick={minusLife}
                  onMouseDown={pressMinus}
                  onMouseUp={dropMinus}
                  onMouseLeave={dropMinus}
                  onTouchStart={pressMinus}
                  onTouchEnd={dropMinus}
                  sx={{ color: "white" }}
                >
                  <TbArrowBadgeLeftFilled size={40} />
                </Button>
              </Box>
              <Box>
                <Typography
                  variant="h3" /// tamanho font
                  color={player?.life && !deathByCommander ? "white" : "red"}
                  fontWeight={"bold"}
                  fontFamily={"monospace"}
                  sx={{ textShadow: "2px 2px black" }}
                >
                  {player?.life}
                </Typography>
              </Box>
              <Box>
                <Button
                  onClick={addLife}
                  onMouseDown={pressAdd}
                  onMouseUp={dropAdd}
                  onMouseLeave={dropAdd}
                  onTouchStart={pressAdd}
                  onTouchEnd={dropAdd}
                  sx={{ color: "white", textShadow: "2px 2px black" }}
                >
                  <TbArrowBadgeRightFilled size={40} />
                </Button>
              </Box>
            </Stack>
          )}
          <Stack flexDirection={"row"} gap={1}>
            <Stack
              width={30}
              height={30}
              bgcolor={"white"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={2}
              sx={{
                backgroundImage: `url(../../assets/dmu-277-plains.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
              }}
              fontWeight={"bold"}
              fontFamily={"monospace"}
            >
              <Stack
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                1
              </Stack>
            </Stack>
            <Stack
              width={30}
              height={30}
              bgcolor={"white"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={2}
              sx={{
                backgroundImage: `url(../../assets/dmu-278-island.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
              }}
              fontWeight={"bold"}
              fontFamily={"monospace"}
            >
              <Stack
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                21
              </Stack>
            </Stack>
            <Stack
              width={30}
              height={30}
              bgcolor={"white"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={2}
              sx={{
                backgroundImage: `url(../../assets/dmu-279-swamp.jpg)`,
                backgroundSize: "cover",
                color: "white",
              }}
              fontWeight={"bold"}
              fontFamily={"monospace"}
            >
              <Stack
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                1
              </Stack>
            </Stack>
            <Stack
              width={60}
              height={30}
              bgcolor={"white"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={2}
              sx={{
                backgroundImage: `url(../../assets/dmu-280-mountain.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                textShadow: "2px 2px black",
                color: "white",
              }}
              fontWeight={"bold"}
              fontFamily={"monospace"}
            >
              <Stack
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                1 | 1
              </Stack>
            </Stack>

            <FaShieldHalved size={30} color="white" />
          </Stack>
        </Stack>
        {outerConter == "right" ? (
          <OutherCounter direction="right" />
        ) : (
          <MoreCounter direction="left" playerId={counter?.playerNumber} />
        )}
      </Stack>
    </>
  );
};
