import { Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import { LayoutCounter } from "../../components/layoutCounter";
import { ModalAssorted } from "../../components/modalAssorted";
import { RefProps } from "../../components/modalAssorted/types";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";

export default function PageCounter() {
  const { initGame, players } = useGamePlayers();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const refModal = useRef<RefProps>({ rollDice: () => {} });

  const rollDice = () => {
    refModal?.current?.rollDice();
  };

  useEffect(() => {
    if (!players?.length) {
      initGame(4);
    }
  }, []);

  return (
    <>
      <ModalAssorted refModal={refModal} />
      <Stack
        height={"100vh"}
        bgcolor={"#13111A"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <LayoutCounter rollDice={rollDice} />
      </Stack>
    </>
  );
}
