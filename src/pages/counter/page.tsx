import { Stack } from "@mui/material";
import { LayoutCounter } from "../../components/layoutCounter";

export default function PageCounter() {
  
  return (
    <>
      <Stack
        height={"100vh"}
        bgcolor={"#13111A"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <LayoutCounter />
      </Stack>
    </>
  );
}
