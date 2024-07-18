import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { useRouter } from './routes';
import { ProviderTheme } from './theme/providerTheme';

export const App = () => {
  const { router } = useRouter();

  return (
    <>
      <CssBaseline />
      <ProviderTheme>
        <RouterProvider router={router} />
      </ProviderTheme>
    </>
  );
};
