export const maskCpf = (value: string | number | undefined | null) => {
  if (!value) return '';
  let newValue = `${value}`.slice(0, 14);
  newValue = newValue.replace(/\D/g, '');
  newValue = newValue.replace(/(\d{3})(\d)/, '$1.$2');
  newValue = newValue.replace(/(\d{3})(\d)/, '$1.$2');
  newValue = newValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return newValue.slice(0, 14);
};
