import { Stack } from "@mui/material";
import { useRef } from "react";
import { LayoutCounter } from "../../components/layoutCounter";
import { ModalAssorted } from "../../components/modalAssorted";
import { RefProps } from "../../components/modalAssorted/types";

export default function PageCounter() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const refModal = useRef<RefProps>({ rollDice: () => {} });

  const rollDice = () => {
    refModal?.current?.rollDice()
  }
  
  return (
    <>
     <ModalAssorted refModal={refModal}/>
      <Stack
        height={"100vh"}
        bgcolor={"#13111A"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <LayoutCounter rollDice={rollDice}/>
      </Stack>
    </>
  );
}
