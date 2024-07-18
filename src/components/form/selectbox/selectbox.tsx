import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Select,
} from '@mui/material';
import { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { Props } from './@types';

/**
 * O componente SelectBox é uma abstração do Select da biblioteca Material UI,
 * integrado ao React Hook Form para facilitar o controle de formulários.
 *
 * Props:
 * - control?: Control<any>;
 * - name: string;
 * - label: string;
 * - hidden?: boolean;
 * - col?: number;
 *
 * O componente `SelectBox` renderiza um campo de seleção de opções. Ele recebe as
 * propriedades `name` (nome do campo), `label` (rótulo do campo),
 *
 * `control` (opcional - utilizado pelo React Hook Form),
 *
 * `col` (opcional - número de colunas para o layout
 * responsivo)
 *
 * `children` (as opções do campo como filhos do componente).
 *
 * Se a propriedade `hidden` for definida como true, o componente não será renderizado.
 *
 * É possível utilizar todas as propriedades existentes na [API do Select](https://mui.com/material-ui/api/select/).
 * Consulte a documentação para mais informações.
 */

export const SelectBox = (props: Props) => {
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
        <FormControl fullWidth size={`${props.size ?? 'small'}`}>
          <InputLabel id={`label-${props.name}`}>{props.label}</InputLabel>
          <Select labelId={`label-${props.name}`} {...rest}>
            {props?.children}
          </Select>
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
      <FormControl fullWidth size={`${props.size ?? 'small'}`}>
        <InputLabel
          id={`label-${props.name}`}
          error={!!formState?.errors?.[`${props?.name}`]?.message}
        >
          {props.label}
        </InputLabel>
        <Select
          error={!!formState?.errors?.[`${props?.name}`]?.message}
          labelId={`label-${props.name}`}
          {...rest}
          onChange={field?.onChange}
          onBlur={field.onBlur}
          value={field.value ?? ''}
          name={field.name}
          inputRef={field.ref}
        >
          {props?.children}
        </Select>
      </FormControl>
      <FormHelperText error={!!formState?.errors?.[`${props?.name}`]?.message}>
        {`${formState?.errors?.[`${props?.name}`]?.message ?? ''}`}
      </FormHelperText>
    </Element>
  );
};
