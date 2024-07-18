import {
  Checkbox as CheckboxMui,
  FormControlLabel,
  FormHelperText,
  Grid,
} from '@mui/material';
import { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { Props } from './@types';

/**
 * O componente Checkbox é uma abstração do Checkbox da biblioteca Material UI,
 * integrado ao React Hook Form para facilitar o controle de formulários.
 *
 * Props:
 * - control?: Control<any>;
 * - name: string;
 * - label?: string;
 * - hidden?: boolean;
 * - value?: boolean;
 * - col?: number;
 *
 * O componente `Checkbox` renderiza um campo de seleção de opção. Ele recebe as
 * propriedades `name` (nome do campo), `label` (rótulo do campo), `control` (opcional
 * - utilizado pelo React Hook Form), `value` (opcional - valor inicial do campo),
 * `hidden` (opcional - indica se o componente deve ser ocultado) e `col` (opcional -
 * número de colunas para o layout responsivo).
 *
 * Se a propriedade `hidden` for definida como true, o componente não será renderizado.
 *
 * É possível utilizar todas as propriedades existentes na [API do Checkbox](https://mui.com/material-ui/api/checkbox/).
 * Consulte a documentação para mais informações.
 */

export const Checkbox = (props: Props) => {
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
        <FormControlLabel
          label={rest?.label ?? undefined}
          control={<CheckboxMui {...rest} />}
        />
      </Element>
    );
  }

  const { field, formState } = useController({
    name: props?.name ?? '',
    control: props.control,
  });

  return (
    <Element {...propsElement}>
      <FormControlLabel
        label={rest?.label ?? undefined}
        control={
          <CheckboxMui
            {...rest}
            checked={!!field.value}
            onChange={(e) => field?.onChange(e.target.checked)}
            onBlur={field?.onBlur}
          />
        }
      />
      <FormHelperText error={!!formState?.errors?.[`${props?.name}`]?.message}>
        {`${formState?.errors?.[`${props?.name}`]?.message ?? ''}`}
      </FormHelperText>
    </Element>
  );
};
