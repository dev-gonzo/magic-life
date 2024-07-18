import { FormHelperText, Grid, TextField } from '@mui/material';
import { Props } from './@types';
import { useController } from 'react-hook-form';
import { Fragment } from 'react';

/**
 * O componente Input é uma abstração do TextField da biblioteca Material UI,
 * integrado ao React Hook Form para facilitar o controle de formulários.
 * É possível utilizar o Input tanto com o React Hook Form quanto sem ele.
 *
 * Props:
 * - control?: Control<any>;
 * - name: string;
 * - hidden?: boolean;
 * - mask?: (value: string | undefined) => string | undefined;
 * - maskBlur?: (value: string | undefined) => string | undefined;
 * - col?: number;
 *
 * Ao utilizar a propriedade `col`, o Input será encapsulado em um Grid com as
 * propriedades xs={12} e md={col}, tornando-o responsivo.
 *
 * As propriedades `mask` e `maskBlur` podem ser utilizadas para aplicar uma máscara
 * no valor do campo. A função `mask` é chamada quando o valor é alterado, enquanto a
 * função `maskBlur` é chamada quando o campo perde o foco.
 *
 * A propriedade `hidden` recebe um valor booleano. Se for definida como true, o Input
 * será ocultado e não será renderizado.
 *
 * É possível utilizar todas as propriedades existentes na [API do TextField](https://mui.com/material-ui/api/text-field/).
 * Consulte a documentação para mais informações.
 */

export const Input = (props: Props) => {
  const { mask, maskBlur, control, hidden, col, ...rest } = props;

  if (hidden) {
    return null;
  }

  const handleMask = (value: string | undefined) => {
    if (!mask) return value;
    return mask(value);
  };

  const handleMaskBlur = (value: string | undefined) => {
    if (!maskBlur) return value;
    return maskBlur(value);
  };

  const Element = col != undefined ? Grid : Fragment;
  const propsElement =
    col != undefined ? { xs: 12, md: col, item: true } : undefined;

  if (!props.control) {
    return (
      <Element {...propsElement}>
        <TextField size="small" fullWidth {...rest} />
      </Element>
    );
  }

  const { field, formState } = useController({
    name: props?.name ?? '',
    control: props.control,
  });

  return (
    <Element {...propsElement}>
      <TextField
        size="small"
        fullWidth
        {...rest}
        onChange={(e) => field?.onChange(handleMask(e?.target?.value))}
        onBlur={(e) => field?.onChange(handleMaskBlur(e?.target?.value))}
        value={field.value ?? ''}
        name={field.name}
        inputRef={field.ref}
        error={!!formState?.errors?.[`${props?.name}`]?.message}
      />
      <FormHelperText error={!!formState?.errors?.[`${props?.name}`]?.message}>
        {`${formState?.errors?.[`${props?.name}`]?.message ?? ''}`}
      </FormHelperText>
    </Element>
  );
};
