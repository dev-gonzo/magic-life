import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { TableContent } from './@types';
import { handleChange } from './helpers/handleChange';
import { handleContentBody } from './helpers/handleContentBody';
import { handleMask } from './helpers/handleMask';

export const ComponentTable = (props: TableContent) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {props.headers?.map((header, index) => (
              <TableCell
                scope="th"
                align={header?.alignHeader ?? undefined}
                key={`table-headers-${header?.field}-${index}`}
              >
                <Typography fontWeight={700}>{header.label}</Typography>
              </TableCell>
            ))}
            {!!props?.actions?.length && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.body?.map((item, indexRow) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={`table-body-row-${indexRow}`}
            >
              {props.headers?.map((header, index) => (
                <TableCell
                  align={header?.align ?? undefined}
                  key={`table-body-cell-${header?.field}-${indexRow}-${index}`}
                >
                  {handleContentBody(
                    handleMask(
                      handleChange(item[header.field], header?.handleData),
                      header?.handleMask,
                    ),
                  )}
                </TableCell>
              ))}

              {!!props?.actions?.length && (
                <TableCell>
                  <Stack
                    flexDirection="row"
                    gap={0.5}
                    justifyContent="flex-end"
                  >
                    {props?.actions?.map((action, index) => {
                      const Element = action?.element?.compoment;
                      return (
                        <Element
                          key={index}
                          children={action?.element?.child}
                          {...action?.element?.props}
                          onClick={() => action?.action(item)}
                        />
                      );
                    })}
                  </Stack>
                </TableCell>
              )}
            </TableRow>
          ))}

          {!props?.body?.length && (
            <TableRow>
              <TableCell
                colSpan={
                  props.headers?.length + (!!props?.actions?.length ? 1 : 0)
                }
              >
                <Typography>
                  {props?.message ?? 'Nenhum resultado disponível'}
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
