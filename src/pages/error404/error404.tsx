import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Stack, Typography } from '@mui/material';

export const Error404 = () => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} flexGrow={1}>
      <WarningAmberIcon color="secondary" sx={{ fontSize: 200 }} />
      <Typography variant="h4">Acesso negado.</Typography>
      <Box width={{ md: '50%' }}>
        <Typography variant="body1" textAlign="center">
          Esse funcionalidade não existe ou você não tem permissão para carregar
          a funcionalidade solicitada. Caso necessite de acesso, entre em
          contato com o administrador.
        </Typography>
      </Box>
    </Stack>
  );
};
