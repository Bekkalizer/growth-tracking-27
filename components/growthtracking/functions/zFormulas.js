import { centileSets } from '../datasets';

const calcZscore = (value, L, M, S) => {
  if (!value) return null;

  const zscore = ((value / M) ** L - 1) / (S * L);

  if (zscore < -3) {
    const sd3neg = M * (1 + L * S * -3) ** (1 / L);
    const sd2neg = M * (1 + L * S * -2) ** (1 / L);
    return -3 + (value - sd3neg) / (sd2neg - sd3neg);
  }

  if (zscore > 3) {
    const sd3pos = M * (1 + L * S * 3) ** (1 / L);
    const sd2pos = M * (1 + L * S * 2) ** (1 / L);
    return 3 + (value - sd3pos) / (sd3pos - sd2pos);
  }

  return zscore;
};

const getWeightForLength = (female, weight, height) => {
  if (height < 45 || height > 110) {
    return null;
  }

  const lowheight = Math.floor(height * 2) / 2;
  const maxheight = Math.round((lowheight + 0.5) * 2) / 2;

  const lowlms = female
    ? centileSets.wflGirls[lowheight]
    : centileSets.wflBoys[lowheight];
  const highlms = female
    ? centileSets.wflGirls[maxheight]
    : centileSets.wflBoys[maxheight];

  if (!lowlms || !highlms) return null;

  const steps = Math.round((height - lowheight) * 10);

  const L = lowlms.L + (highlms.L - lowlms.L) / 10 * steps;
  const M = lowlms.M + (highlms.M - lowlms.M) / 10 * steps;
  const S = lowlms.S + (highlms.S - lowlms.S) / 10 * steps;

  return calcZscore(weight, L, M, S);
};

const getAgeBasedLms = (dataset, age) =>
  dataset[age]
    ? { exact: dataset[age] }
    : Object.keys(dataset).reduce(
        (acc, value) => {
          const num = Number(value);
          if (acc.low === null || (acc.low < num && num < age)) {
            acc.low = num;
          }
          if (acc.high === null && num > age) {
            acc.high = num;
          }
          return acc;
        },
        { low: null, high: null },
      );

const getAgeBasedZscore = (dataset, measurement, age) => {
  const lms = getAgeBasedLms(dataset, age);

  if (lms.exact) {
    return calcZscore(measurement, lms.exact.L, lms.exact.M, lms.exact.S);
  }

  const lowlms = dataset[lms.low];
  const highlms = dataset[lms.high];

  const steps = age - lms.low;

  const L = lowlms.L + (highlms.L - lowlms.L) / 10 * steps;
  const M = lowlms.M + (highlms.M - lowlms.M) / 10 * steps;
  const S = lowlms.S + (highlms.S - lowlms.S) / 10 * steps;

  return calcZscore(measurement, L, M, S);
};

const getWeightForAge = (female, weight, age) => {
  const dataset = female ? centileSets.wfaGirls : centileSets.wfaBoys;

  return getAgeBasedZscore(dataset, weight, age);
};

const getLengthForAge = (female, height, age) => {
  const dataset = female ? centileSets.lhfaGirls : centileSets.lhfaBoys;

  return getAgeBasedZscore(dataset, height, age);
};

const getBMIForAge = (female, bmi, age) => {
  const dataset = female ? centileSets.bfaGirls : centileSets.bfaBoys;

  return getAgeBasedZscore(dataset, bmi, age);
};

const getHCForAge = (female, hc, age) => {
  const dataset = female ? centileSets.hcfaGirls : centileSets.hcfaBoys;

  return getAgeBasedZscore(dataset, hc, age);
};

const getMUACForAge = (female, muac, age) => {
  if (age < 91) return null;

  const dataset = female ? centileSets.acfaGirls : centileSets.acfaBoys;

  return getAgeBasedZscore(dataset, muac, age);
};

const getTSForAge = (female, ts, age) => {
  if (age < 91) return null;

  const dataset = female ? centileSets.tsfaGirls : centileSets.tsfaBoys;

  return getAgeBasedZscore(dataset, ts, age);
};

const getSSForAge = (female, ss, age) => {
  if (age < 91) return null;

  const dataset = female ? centileSets.ssfaGirls : centileSets.ssfaBoys;

  return getAgeBasedZscore(dataset, ss, age);
};

export {
  getWeightForLength,
  getWeightForAge,
  getLengthForAge,
  getBMIForAge,
  getHCForAge,
  getMUACForAge,
  getTSForAge,
  getSSForAge,
};