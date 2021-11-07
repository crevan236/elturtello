const toRadians = (degree: number) => {
  return degree * (Math.PI / 180);
};

const roundNumber = (value: number) => {
  const decimals = 5;
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

export const cos = (degree: number) => {
  const result = Math.cos(toRadians(degree));

  return result > 1 || result < -1 ? 0 : roundNumber(result);
};

export const sin = (degree: number) => {
  const result = Math.sin(toRadians(degree));

  return result > 1 || result < -1 ? 0 : roundNumber(result);
};
