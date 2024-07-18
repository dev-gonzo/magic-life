import { Control } from 'react-hook-form';

export type Props = {
  options: any;
  control?: Control<any>;
  name: string;
  hidden?: boolean;
  label?: string;
  size?: 'small' | 'medium';
  variant?: 'filled' | 'outlined' | 'standard';
  sx?: Array<Function | object | Boolean> | Function | object;
  required?: boolean;
  placeholder?: string;
  getOptionLabel?: () => string;
  col?: number;
};
