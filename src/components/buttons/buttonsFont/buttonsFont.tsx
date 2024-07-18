import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import { IconButton } from '@mui/material';
import { useThemeMode } from '../../../storeds/useThemeMode';
import { styleButtonFont } from './styles';

/**
 * O componente ButtonsFont é responsável por renderizar os botões de aumento e diminuição de
 * tamanho da fonte do aplicativo.
 *
 * O ButtonsFont utiliza os componentes `IconButton`, `TextDecreaseIcon` e `TextIncreaseIcon` da
 * biblioteca Material UI para renderizar os botões de alteração de tamanho da fonte.
 *
 */

export const ButtonsFont = () => {
  const { decreaseFontSize, increaseFontSize } = useThemeMode();
  return (
    <>
      <IconButton aria-label="font minus" onClick={decreaseFontSize}>
        <TextDecreaseIcon sx={styleButtonFont} />
      </IconButton>

      <IconButton aria-label="font plus" onClick={increaseFontSize}>
        <TextIncreaseIcon sx={styleButtonFont} />
      </IconButton>
    </>
  );
};
