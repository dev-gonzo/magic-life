import White from "../assets/white_mana.png";
import Black from "../assets/black_mana.png";
import Blue from "../assets/blue_mana.png";
import Green from "../assets/green_mana.png";
import Red from "../assets/red_mana.png";
import Colorless from "../assets/waste.webp";

export const mana = {
  plains: {
    icon: White,
    color: "#F8F6D8",
  },
  island: {
    icon: Blue,
    color: "#C1D7E9",
  },
  swamp: {
    icon: Black,
    color: "#4A4A4A",
  },
  mountain: {
    icon: Red,
    color: "#E49977",
  },
  forest: {
    icon: Green,
    color: "#A3C095",
  },
  waste: {
    icon: Colorless,
    color: "#BAB1AB",
  },
  white: {
    icon: undefined,
    color: "white",
  },
  blue: {
    icon: undefined,
    color: "#133468",
  },
  black: {
    icon: undefined,
    color: "#212121",
  },
  red: {
    icon: undefined,
    color: "#AC2319",
  },
  green: {
    icon: undefined,
    color: "#26662B",
  },
  colorless: {
    icon: undefined,
    color: "#CFCACA",
  },
};
