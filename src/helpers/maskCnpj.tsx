export const maskCnpj = (value: string | number | undefined | null) => {
  if (!value) return '';
  let newValue = `${value}`.slice(0, 18);
  newValue = newValue.replace(/\D/g, '');
  newValue = newValue.replace(/^(\d{2})(\d)/, '$1.$2');
  newValue = newValue.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  newValue = newValue.replace(/\.(\d{3})(\d)/, '.$1/$2');
  newValue = newValue.replace(/(\d{4})(\d)/, '$1-$2');
  return newValue.slice(0, 18);
};
