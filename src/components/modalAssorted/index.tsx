import { Modal, Stack } from "@mui/material";
import { useEffect, useImperativeHandle, useState } from "react";
import {
  FaDiceFive,
  FaDiceFour,
  FaDiceOne,
  FaDiceSix,
  FaDiceThree,
  FaDiceTwo,
} from "react-icons/fa";
import { RollDiceSix } from "../../helpers/rollDiceSix";
import { useGamePlayers } from "../../storeds/useThemeMode/useGamePlayers";
import { RefProps } from "./types";

const diceList = [
  <FaDiceOne color="white" size={50} key="dice-1" />,
  <FaDiceTwo color="white" size={50} key="dice-2" />,
  <FaDiceThree color="white" size={50} key="dice-3" />,
  <FaDiceFour color="white" size={50} key="dice-4" />,
  <FaDiceFive color="white" size={50} key="dice-5" />,
  <FaDiceSix color="white" size={50} key="dice-6" />,
];

export const ModalAssorted = ({
  refModal,
}: {
  refModal: React.MutableRefObject<RefProps>;
}) => {
  const { players, setSorted: setSortedPlayer } = useGamePlayers();
  const [dice, setDice] = useState(1);
  const [roll, setRoll] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [sorted, setSorted] = useState(0);

  const finishRollDice = () => {
    setSortedPlayer(dice)
    setOpen(false);
    setRoll(false);
    setSorted(0);
  };

  const rollDice = () => {
    if (sorted < 20) {
      setDice(RollDiceSix(players?.length));
      setSorted((prev) => ++prev);
    } else {
      setTimeout(() => {
        finishRollDice();
      }, 1000);
    }
  };

  useEffect(() => {
    if (roll) {
      setTimeout(() => {
        rollDice();
      }, 100);
    }
  }, [roll, sorted]);

  useImperativeHandle(
    refModal,
    (): RefProps => ({
      rollDice: () => {
        setRoll(true);
        setOpen(true);
      },
    }),
    []
  );

  return (
    <Modal open={open}>
      <Stack
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingRight={"34px"}
      >
        {diceList[dice - 1]}
      </Stack>
    </Modal>
  );
};
