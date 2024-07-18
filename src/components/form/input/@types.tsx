import { Control } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

export type Props = {
  control?: Control<any>;
  name: string;
  hidden?: boolean;
  mask?: (value: string | undefined) => string | undefined;
  maskBlur?: (value: string | undefined) => string | undefined;
  col?: number;
} & TextFieldProps;
