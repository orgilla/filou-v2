const Decimal = ({ value = 0, digits = 2, d = '-', sign = true }) => {
  const num = !value
    ? d
    : value.toLocaleString('de-DE', { minimumFractionDigits: digits });
  return `${num}${sign ? ' $' : ''}`;
};

export default Decimal;
