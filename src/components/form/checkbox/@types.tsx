import { CheckboxProps } from '@mui/material';
import { Control } from 'react-hook-form';

export type Props = {
  control?: Control<any>;
  name: string;
  label?: string;
  hidden?: boolean;
  value?: boolean;
  col?: number;
} & CheckboxProps;
