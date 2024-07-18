import { Stack } from '@mui/material';
import { Props } from './@types';

/**
 * O componente Wrapper é responsável por envolver outros componentes em um stack (pilha)
 * vertical, adicionando um espaçamento interno e definindo uma altura mínima.
 *
 * Props:
 * - children: JSX.Element | JSX.Element[];
 *
 * O componente `Wrapper` recebe a propriedade `children`, que representa os componentes
 * que serão envolvidos pelo Wrapper.
 *
 * O Wrapper utiliza o componente `Stack` da biblioteca Material UI para criar uma pilha
 * vertical de elementos. Ele adiciona um espaçamento interno e define uma altura mínima.
 *
 * Certifique-se de passar os componentes desejados como filhos do Wrapper.
 */

export const Wrapper = ({ children }: Props) => {
  return (
    <Stack minHeight={'100%'}>
      {children}
    </Stack>
  );
};
