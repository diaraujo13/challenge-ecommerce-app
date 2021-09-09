export const moneyFormat = (val: number) =>
  `R$ ${val.toFixed(2).toString().replace('.', ',')}`;
