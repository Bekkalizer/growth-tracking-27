const getDeviations = (dataSet, displayType) => {
  if (displayType === 'zscore') {
    return Object.entries(dataSet).reduce(
      (acc, value) => ({
        SD3: [...acc.SD3, [Number(value[0]), value[1].SD3]],
        SD2: [...acc.SD2, [Number(value[0]), value[1].SD2]],
        SD1: [...acc.SD1, [Number(value[0]), value[1].SD1]],
        SD0: [...acc.SD0, [Number(value[0]), value[1].SD0]],
        SD1neg: [...acc.SD1neg, [Number(value[0]), value[1].SD1neg]],
        SD2neg: [...acc.SD2neg, [Number(value[0]), value[1].SD2neg]],
        SD3neg: [...acc.SD3neg, [Number(value[0]), value[1].SD3neg]]
      }),
      {
        SD3: [],
        SD2: [],
        SD1: [],
        SD0: [],
        SD1neg: [],
        SD2neg: [],
        SD3neg: []
      }
    );
  }
  return Object.entries(dataSet).reduce(
    (acc, value) => ({
      P3: [...acc.P3, [Number(value[0]), value[1].P3]],
      P15: [...acc.P15, [Number(value[0]), value[1].P15]],
      P50: [...acc.P50, [Number(value[0]), value[1].P50]],
      P85: [...acc.P85, [Number(value[0]), value[1].P85]],
      P97: [...acc.P97, [Number(value[0]), value[1].P97]]
    }),
    {
      P3: [],
      P15: [],
      P50: [],
      P85: [],
      P97: []
    }
  );
};

export default getDeviations;
