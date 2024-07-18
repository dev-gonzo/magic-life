import { Stack, useMediaQuery } from '@mui/material';
import { TableContent } from './@types';
import { ComponentTable } from './componentTable';
import { ComponentTableMobile } from './componentTableMobile';

/**
 * O componente TableSimple é responsável por renderizar uma tabela simples com base nos dados fornecidos.
 * Ele se adapta ao tamanho da tela, exibindo a tabela completa em telas maiores e uma versão simplificada
 * em telas menores.
 *
 * Props:
 * - headers: TableContentHeaders[];
 * - body?: TableContentBody[];
 * - actions?: TableContentActions[];
 * - message?: string;
 *
 * O componente `TableSimple` recebe as propriedades `headers` (array de objetos contendo as informações
 * dos cabeçalhos da tabela), `body` (opcional - array de objetos contendo as informações do corpo da tabela),
 * `actions` (opcional - array de objetos contendo informações sobre as ações a serem executadas em cada linha
 * da tabela) e `message` (opcional - mensagem a ser exibida quando não há dados na tabela).
 *
 * O componente utiliza os componentes `ComponentTable` e `ComponentTableMobile` para renderizar a tabela
 * completa e a versão simplificada, respectivamente.
 *
 * Certifique-se de que as propriedades `headers` estejam corretamente definidas com as informações dos cabeçalhos
 * da tabela. O `body` deve ser um array de objetos contendo as informações do corpo da tabela. A propriedade `actions`
 * permite definir ações personalizadas a serem executadas em cada linha da tabela.
 */

export const TableSimple = (props: TableContent) => {
  const matches = useMediaQuery('(min-width:650px)');

  return (
    <Stack gap={1}>
      {matches ? (
        <ComponentTable {...props} />
      ) : (
        <ComponentTableMobile {...props} />
      )}
    </Stack>
  );
};
