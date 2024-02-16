export const toFixedNoRounding = (value, precision = 1) => {
  const fixed = Math.pow(10, precision);
  return Math.floor(Number(value) * fixed) / fixed;
};
