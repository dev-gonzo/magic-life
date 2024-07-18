import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  RadioGroup as RadioGroupMui,
} from '@mui/material';
import { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { Props } from './@types';

/**
 * O componente RadioGroup é uma abstração do RadioGroup da biblioteca Material UI,
 * integrado ao React Hook Form para facilitar o controle de formulários.
 *
 * Props:
 * - control?: Control<any>;
 * - name: string;
 * - label?: string;
 * - hidden?: boolean;
 * - value?: boolean;
 * - children: JSX.Element | JSX.Element[];
 * - col?: number;
 *
 * O componente `RadioGroup` renderiza um grupo de botões de opção. Ele recebe as
 * propriedades `control` (opcional - utilizado pelo React Hook Form), `name` (nome
 * do campo), `label` (opcional - rótulo do campo), `hidden` (opcional - indica se
 * o componente deve ser ocultado), `value` (opcional - valor inicial do campo),
 * `children` (elementos JSX representando as opções do grupo) e `col` (opcional -
 * número de colunas para o layout responsivo).
 *
 * Se a propriedade `hidden` for definida como true, o componente não será renderizado.
 *
 * É possível utilizar todas as propriedades existentes na [API do RadioGroup](https://mui.com/material-ui/api/radio-group/)
 * e na [API do Radio](https://mui.com/material-ui/api/radio/). Consulte a documentação para mais informações.
 */

export const RadioGroup = (props: Props) => {
  const { control, hidden, col, ...rest } = props;

  if (hidden) {
    return null;
  }

  const Element = col != undefined ? Grid : Fragment;
  const propsElement =
    col != undefined ? { xs: 12, md: col, item: true } : undefined;

  if (!props.control) {
    return (
      <Element {...propsElement}>
        <FormControl>
          <FormLabel id={`label-${props.label}`}>{props.label}</FormLabel>
          <RadioGroupMui
            {...rest}
            row={props?.row}
            aria-labelledby={`label-${props.label}`}
            name={props.name}
          >
            {props?.children}
          </RadioGroupMui>
        </FormControl>
      </Element>
    );
  }

  const { field, formState } = useController({
    name: props?.name ?? '',
    control: props.control,
  });

  return (
    <Element {...propsElement}>
      <FormControl>
        <FormLabel
          id={`label-${props.label}`}
          error={!!formState?.errors?.[`${props?.name}`]?.message}
        >
          {props.label}
        </FormLabel>
        <RadioGroupMui
          {...rest}
          row={props?.row}
          aria-labelledby={`label-${props.label}`}
          name={props.name}
          value={field?.value ?? ''}
          onChange={field?.onChange}
          onBlur={field?.onBlur}
        >
          {props?.children}
        </RadioGroupMui>
      </FormControl>
      <FormHelperText error={!!formState?.errors?.[`${props?.name}`]?.message}>
        {`${formState?.errors?.[`${props?.name}`]?.message ?? ''}`}
      </FormHelperText>
    </Element>
  );
};
