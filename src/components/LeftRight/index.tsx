import { Props } from "./types";

export const LeftRight = ({ direction, Icon, Value }: Props) => {
  if (direction == "left") {
    return (
      <>
        {Icon}
        {Value}
      </>
    );
  }

  return (
    <>
      {Value}
      {Icon}
    </>
  );
};
