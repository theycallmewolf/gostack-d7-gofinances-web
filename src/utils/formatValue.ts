const formatValue = (value: number, type = 'income'): string => {
  // const number = type === 'outcome' ? Math.abs(value) * -1 : Math.abs(value);
  // const valueFormatted = Intl.NumberFormat('Pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  // }).format(number);

  const number = Intl.NumberFormat('Pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  const valueFormatted = type === 'outcome' ? `- ${number}` : `${number}`;

  return valueFormatted;
};

export default formatValue;
