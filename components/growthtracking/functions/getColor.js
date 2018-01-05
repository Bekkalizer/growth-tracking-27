const getColor = (colors, value, disabled) => {
  if (disabled) {
    return '#ccc';
  }
  if (value >= 3) {
    return colors.SD3_4;
  }
  if (value >= 2) {
    return colors.SD2_3;
  }
  if (value >= 1) {
    return colors.SD1_2;
  }
  return colors.SD0_1;
};

export default getColor;
