export type TypeData = string | number | Date | boolean | object;

type TableContentHeaders = {
  label: string;
  field: string;
  order?: string;
  handleData?: (
    value: any,
  ) => TypeData | undefined | Array<TypeData | undefined | null> | null;
  handleMask?: (
    value: string | number | undefined | null,
  ) => TypeData | undefined | Array<TypeData | undefined | null> | null;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  alignHeader?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
};

export type TableContentBody = {
  [key: string | number]:
    | TypeData
    | undefined
    | Array<TypeData | undefined | null>
    | null;
};

type TableContentActions = {
  element: {
    compoment: React.ElementType;
    props?: any;
    child?: React.ReactNode;
  };
  action: (row: TableContentBody) => void;
  hidden?: (row: TableContentBody) => boolean;
  disable?: (row: TableContentBody) => boolean;
};

export type TableContent = {
  headers: TableContentHeaders[];
  body?: TableContentBody[];
  actions?: TableContentActions[];
  message?: string;
};
