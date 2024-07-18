import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { ButtonsTheme } from '../buttons/buttonsTheme';
import { Props } from './@types';
import { styleIconButton, styleText } from './styles';
import { ButtonsFont } from '../buttons/buttonsFont/buttonsFont';

/**
 * O componente Navbar é responsável por renderizar uma barra de navegação com um menu
 * hamburguer, título do projeto, botões de fonte e tema, e um botão de login.
 *
 * Props:
 * - handleToggleMenu: () => void;
 *
 * O componente `Navbar` recebe a propriedade `handleToggleMenu`, que é uma função responsável
 * por lidar com a ação de abrir/fechar o menu.
 *
 * O Navbar utiliza os componentes `AppBar`, `Toolbar`, `IconButton`, `Typography`, `Box`,
 * `ButtonsFont`, `ButtonsTheme` e `Button` da biblioteca Material UI para renderizar os
 * diferentes elementos da barra de navegação.
 *
 * Certifique-se de fornecer uma função `handleToggleMenu` corretamente para controlar o
 * comportamento do menu hamburguer.
 */

export const Navbar = ({ handleToggleMenu }: Props) => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={styleIconButton}
          onClick={() => handleToggleMenu()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={styleText}>
          Projeto Referencia
        </Typography>
        <Box>
          <ButtonsFont />
          <ButtonsTheme />
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
