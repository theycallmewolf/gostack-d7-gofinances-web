const formatDate = (value: Date): string => {
  const date = new Date(value);
  const day = date.getDate().toString();
  const dayFull = day.length === 1 ? `0${day}` : day;
  const month = (date.getMonth() + 1).toString();
  const monthFull = month.length === 1 ? `0${month}` : month;
  const year = date.getFullYear();
  return `${dayFull}/${monthFull}/${year}`;
};

export default formatDate;
