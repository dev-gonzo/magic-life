import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { TableContent } from './@types';
import { handleChange } from './helpers/handleChange';
import { handleContentBody } from './helpers/handleContentBody';
import { handleMask } from './helpers/handleMask';

export const ComponentTableMobile = (props: TableContent) => {
  return (
    <>
      {props.body?.map((item, indexRow) => (
        <Stack component={Paper} key={`table-body-row-${indexRow}`}>
          <Table aria-label="simple table">
            <TableBody>
              {props.headers?.map((header, index) => (
                <TableRow
                  key={`table-body-cell-${header?.field}-${indexRow}-${index}`}
                >
                  <TableCell scope="th">{header?.label}:</TableCell>
                  <TableCell width={'60%'}>
                    {handleContentBody(
                      handleMask(
                        handleChange(item[header.field], header?.handleData),
                        header?.handleMask,
                      ),
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Stack padding={1}>
            {!!props?.actions?.length && (
              <Stack
                gap={0.5}
                direction="row"
                justifyContent="space-around"
                flexWrap="wrap"
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
            )}
          </Stack>
        </Stack>
      ))}
      {!props?.body?.length && (
        <Typography padding={2}>
          {props?.message ?? 'Nenhum resultado disponível'}
        </Typography>
      )}
    </>
  );
};
