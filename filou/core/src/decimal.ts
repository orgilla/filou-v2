import { Component } from 'react';

const convert = (
  value: number = 0,
  sign: string | boolean | undefined = '',
  { digits = 2, d = '-' } = {}
) => {
  const num = !value
    ? d
    : value.toLocaleString('de-DE', { minimumFractionDigits: digits });
  return `${num}${sign ? ` ${sign}` : ''}`;
};

interface IDecimal {
  value: number;
  digits?: number;
  d?: string;
  sign: string;
}

class Decimal extends Component<IDecimal> {
  static from = convert;
  render() {
    const { value = 0, digits, d, sign } = this.props;
    return convert(value, sign, { digits, d });
  }
}

export default Decimal;
