import { sdSets } from '../datasets';

const indicatorConfigs = female => ({
  wfl: {
    title: 'Weight-for-length',
    xtitle: 'Height (cm)',
    ytitle: 'Weight (kg)',
    dataSet: female ? sdSets.wflGirlsSd : sdSets.wflBoysSd,
    measurement1: 'height', // replace string with corresponding data value string from config
    measurement2: 'weight', // replace string with corresponding data value string from config
  },
  wfa: {
    title: 'Weight-for-age',
    xtitle: 'Age (months)',
    ytitle: 'Weight (kg)',
    dataSet: female ? sdSets.wfaGirlsSd : sdSets.wfaBoysSd,
    ageBased: true,
    measurement1: 'age', // replace string with corresponding data value string from config
    measurement2: 'weight', // replace string with corresponding data value string from config
  },
  lfa: {
    title: 'Length-for-age',
    xtitle: 'Age (months)',
    ytitle: 'Height (cm)',
    dataSet: female ? sdSets.lhfaGirlsSd : sdSets.lhfaBoysSd,
    ageBased: true,
    measurement1: 'age', // replace string with corresponding data value string from config
    measurement2: 'height', // replace string with corresponding data value string from config
  },
  bfa: {
    title: 'BMI-for-age',
    xtitle: 'Age (months)',
    ytitle: 'BMI',
    dataSet: female ? sdSets.bfaGirlsSd : sdSets.bfaBoysSd,
    ageBased: true,
    measurement1: 'age', // replace string with corresponding data value string from config
    measurement2: 'bmi', // replace string with corresponding data value string from config
  },
  acfa: {
    title: 'MUAC-for-age',
    xtitle: 'Age (months)',
    ytitle: 'MUAC',
    dataSet: female ? sdSets.acfaGirlsSd : sdSets.acfaBoysSd,
    ageBased: true,
    measurement1: 'age', // replace string with corresponding data value string from config
    measurement2: 'muac', // replace string with corresponding data value string from config
  },
  hcfa: {
    title: 'HC-for-age',
    xtitle: 'Age (months)',
    ytitle: 'Head Circumference (cm)',
    dataSet: female ? sdSets.hcfaGirlsSd : sdSets.hcfaBoysSd,
    ageBased: true,
    measurement1: 'age', // replace string with corresponding data value string from config
    measurement2: 'hc', // replace string with corresponding data value string from config
  },
  tsfa: {
    title: 'TSF-for-age',
    xtitle: 'Age (months)',
    ytitle: 'Triceps skinfold (cm)',
    dataSet: female ? sdSets.tsfaGirlsSd : sdSets.tsfaBoysSd,
    ageBased: true,
    measurement1: 'age', // replace string with corresponding data value string from config
    measurement2: 'ts', // replace string with corresponding data value string from config
  },
  ssfa: {
    title: 'SSF-for-age',
    xtitle: 'Age (months)',
    ytitle: 'Subscapular Skinfold (cm)',
    dataSet: female ? sdSets.ssfaGirlsSd : sdSets.ssfaBoysSd,
    ageBased: true,
    measurement1: 'age', // replace string with corresponding data value string from config
    measurement2: 'ss', // replace string with corresponding data value string from config
  },
});

const getIndicatorConfig = (female, plotType) =>
  indicatorConfigs(female)[plotType];

export default getIndicatorConfig;
