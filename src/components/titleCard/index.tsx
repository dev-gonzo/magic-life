import { IconButton, Stack, Typography } from "@mui/material";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const TitleCard = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <Stack direction={"row"} gap={0.3} alignItems={"center"} paddingTop={0.5}>
        <Typography
          variant="overline"
          color={"white"}
          fontWeight={"bold"}
          fontFamily={"monospace"}
          sx={{ textShadow: "1px 1px black", lineHeight: 0 }}
          component={"span"}
        >
          {title}
        </Typography>
        <IconButton
          size="small"
          color="inherit"
          onClick={() => navigate("/edit-player")}
        >
          <FaUserEdit color="white" />
        </IconButton>
      </Stack>
    </>
  );
};
