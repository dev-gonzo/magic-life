import {
  Autocomplete as AutocompleteMui,
  Grid,
  TextField,
} from '@mui/material';
import { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { Props } from './@types';

/**
 * O componente Autocomplete é uma abstração do Autocomplete da biblioteca Material UI,
 * integrado ao React Hook Form para facilitar o controle de formulários.
 *
 * Props:
 * - control?: Control<any>;
 * - name: string;
 * - hidden?: boolean;
 * - label?: string;
 * - size?: 'small' | 'medium' | string;
 * - variant?: 'filled' | 'outlined' | 'standard';
 * - sx?: Array<Function | object | Boolean> | Function | object;
 * - required?: boolean;
 * - placeholder?: string;
 * - getOptionLabel?: string;
 * - options?: Array<string | { label: string; id: number }>;
 * - col?: number;
 * - ...any (outras propriedades específicas do Autocomplete)
 *
 * O componente `Autocomplete` renderiza um campo de autocompletar. Ele recebe as propriedades
 * `control` (opcional - utilizado pelo React Hook Form), `name` (nome do campo), `hidden` (opcional
 * - indica se o componente deve ser ocultado), `label` (opcional - rótulo do campo), `size` (opcional
 * - tamanho do campo), `variant` (opcional - variante do campo), `sx` (opcional - estilos adicionais
 * do campo), `required` (opcional - indica se o campo é obrigatório), `placeholder` (opcional -
 * texto de placeholder do campo), `getOptionLabel` (opcional - função para obter o rótulo de uma opção
 * selecionada), `options` (opcional - array de opções disponíveis para o autocompletar), `col` (opcional
 * - número de colunas para o layout responsivo) e outras propriedades específicas do Autocomplete.
 *
 * Se a propriedade `hidden` for definida como true, o componente não será renderizado.
 *
 * É possível utilizar todas as propriedades existentes na [API do Autocomplete](https://mui.com/material-ui/api/autocomplete/)
 * e na [API do TextField](https://mui.com/material-ui/api/text-field/). Consulte a documentação para mais informações.
 */

export const Autocomplete = (props: Props) => {
  const {
    control,
    hidden,
    size,
    variant,
    sx,
    required,
    label,
    placeholder,
    col,
    ...rest
  } = props;

  if (hidden) {
    return null;
  }

  const Element = col != undefined ? Grid : Fragment;
  const propsElement =
    col != undefined ? { xs: 12, md: col, item: true } : undefined;

  if (!props.control) {
    return (
      <Element {...propsElement}>
        <AutocompleteMui
          {...rest}
          options={props.options ?? []}
          renderInput={(params) => (
            <TextField
              {...params}
              size={size ?? 'small'}
              variant={variant ?? undefined}
              sx={sx ?? {}}
              required={required ?? false}
              label={label}
              placeholder={placeholder}
            />
          )}
        />
      </Element>
    );
  }

  if (!props.options) {
    props.options = [];
  }

  const { field } = useController({
    name: props?.name ?? '',
    control: props.control,
  });

  return (
    <Element {...propsElement}>
      <AutocompleteMui
        options={props.options ?? []}
        onChange={(_, item) => field.onChange(item)}
        value={field.value ?? null}
        getOptionLabel={props.getOptionLabel}
        renderInput={(params) => (
          <TextField
            {...params}
            size={size ?? 'small'}
            variant={variant ?? undefined}
            sx={sx ?? {}}
            required={required ?? false}
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </Element>
  );
};
