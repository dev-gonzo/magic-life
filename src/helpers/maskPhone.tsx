export const maskPhone = (value: string | number | undefined | null) => {
  if (!value) return '';
  let newValue = `${value}`.slice(0, 15);
  newValue = newValue.replace(/\D/g, '');
  newValue = newValue.replace(/^(\d{2})(\d)/g, '($1) $2');
  if (newValue.length === 14) {
    newValue = newValue.replace(/(\d{5})(\d)/, '$1-$2');
  } else if (newValue.length === 13) {
    newValue = newValue.replace(/(\d{4})(\d)/, '$1-$2');
  }
  return newValue;
};
