import { Grid } from '@mui/material';
import { Props } from './@types';

export const Form = ({ children, handleSubmit }: Props) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {children}
        </Grid>
      </form>
    </>
  );
};
