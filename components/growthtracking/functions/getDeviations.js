const getDeviations = dataSet =>
  Object.entries(dataSet).reduce(
    (acc, value) => ({
      SD4_SD3: [...acc.SD4_SD3, [Number(value[0]), value[1].SD4, value[1].SD3]],
      SD3_SD2: [...acc.SD3_SD2, [Number(value[0]), value[1].SD3, value[1].SD2]],
      SD2_SD1: [...acc.SD2_SD1, [Number(value[0]), value[1].SD2, value[1].SD1]],
      SD1_nSD1: [
        ...acc.SD1_nSD1,
        [Number(value[0]), value[1].SD1, value[1].SD1neg],
      ],
      nSD1_nSD2: [
        ...acc.nSD1_nSD2,
        [Number(value[0]), value[1].SD1neg, value[1].SD2neg],
      ],
      nSD2_nSD3: [
        ...acc.nSD2_nSD3,
        [Number(value[0]), value[1].SD2neg, value[1].SD3neg],
      ],
      nSD3_nSD4: [
        ...acc.nSD3_nSD4,
        [Number(value[0]), value[1].SD3neg, value[1].SD4neg],
      ],
      SD0: [...acc.SD0, [Number(value[0]), value[1].SD0]],
    }),
    {
      SD4_SD3: [],
      SD3_SD2: [],
      SD2_SD1: [],
      SD1_nSD1: [],
      nSD1_nSD2: [],
      nSD2_nSD3: [],
      nSD3_nSD4: [],
      SD0: [],
    },
  );

export default getDeviations;
