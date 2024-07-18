import { FormControlLabel, Radio } from '@mui/material';
import { Props } from './@types';

/**
 * O componente OptionRadio é responsável por renderizar uma opção de botão de rádio
 * dentro de um grupo de botões de rádio (RadioGroup).
 *
 * Props:
 * - value: string;
 * - label: string;
 *
 * O componente `OptionRadio` recebe as propriedades `value` (valor da opção) e `label`
 * (rótulo da opção).
 *
 * O componente utiliza os componentes `FormControlLabel` e `Radio` da biblioteca Material UI
 * para renderizar a opção de botão de rádio.
 *
 * Certifique-se de que as propriedades `value` e `label` estejam corretamente definidas para
 * cada opção do grupo de botões de rádio.
 */

export const OptionRadio = ({ value, label }: Props) => {
  return <FormControlLabel value={value} control={<Radio />} label={label} />;
};
