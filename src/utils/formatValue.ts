const formatValue = (value: number): string => {
  const number = Intl.NumberFormat('Pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return number;
};

export default formatValue;
