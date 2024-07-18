import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import { styleButtonTheme } from './styles';
import { useThemeMode } from '../../../storeds/useThemeMode';

/**
 * O componente ButtonsTheme é responsável por renderizar os botões de alternância de tema,
 * permitindo que o usuário alterne entre os modos claro e escuro.
 *
 * O ButtonsTheme utiliza os componentes `IconButton`, `DarkModeIcon` e `LightModeIcon` da
 * biblioteca Material UI para renderizar os botões de alternância de tema.
 *
 */

export const ButtonsTheme = () => {
  const { themeMode, toggleTheme } = useThemeMode();
  return (
    <>
      {themeMode == 'light' ? (
        <IconButton aria-label="theme" onClick={toggleTheme}>
          <DarkModeIcon sx={styleButtonTheme} />
        </IconButton>
      ) : (
        <IconButton aria-label="theme" onClick={toggleTheme}>
          <LightModeIcon sx={styleButtonTheme} />
        </IconButton>
      )}
    </>
  );
};
