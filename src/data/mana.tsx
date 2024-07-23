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
    contrast: "#4A4A4A",
  },
  island: {
    icon: Blue,
    color: "#C1D7E9",
    contrast: "#4A4A4A",
  },
  swamp: {
    icon: Black,
    color: "#4A4A4A",
    contrast: "#F8F6D8",
  },
  mountain: {
    icon: Red,
    color: "#E49977",
    contrast: "#4A4A4A",
  },
  forest: {
    icon: Green,
    color: "#A3C095",
    contrast: "#4A4A4A",
  },
  waste: {
    icon: Colorless,
    color: "#BAB1AB",
    contrast: "#4A4A4A",
  },
  white: {
    icon: undefined,
    color: "white",
    contrast: "#4A4A4A",
  },
  blue: {
    icon: undefined,
    color: "#133468",
    contrast: "#F8F6D8",
  },
  black: {
    icon: undefined,
    color: "#212121",
    contrast: "#F8F6D8",
  },
  red: {
    icon: undefined,
    color: "#AC2319",
    contrast: "#4A4A4A",
  },
  green: {
    icon: undefined,
    color: "#26662B",
    contrast: "#F8F6D8",
  },
  colorless: {
    icon: undefined,
    color: "#CFCACA",
    contrast: "#4A4A4A",
  },
};
