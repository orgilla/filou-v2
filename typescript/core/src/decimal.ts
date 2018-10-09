export default ({ value = 0, digits = 2, d = '-' }) =>
  !value ? d : value.toLocaleString('de-DE', { minimumFractionDigits: digits });
