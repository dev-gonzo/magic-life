import { Box } from '@mui/material';
import packageData from '../../../package.json';

/**
 * O componente Footer é responsável por renderizar o rodapé da página exibindo informações
 * sobre o projeto referência.
 *
 * O Footer utiliza o componente `Box` da biblioteca Material UI para estruturar o conteúdo
 * do rodapé.
 *
 * Certifique-se de fornecer as informações corretas sobre o projeto referência, como o nome
 * (MITH - Magna Innovation Technology Hub) e a versão do projeto (obtida do arquivo package.json).
 */

export const Footer = () => {
  return (
    <Box textAlign="center" padding={2}>
      MITH - Magna Innovation Technology Hub - Projeto Referência{' '}
      {packageData?.version}
    </Box>
  );
};
