/**
 * Temporary patient and visit data
 */
const patientInfo = {
  date_of_birth: 1,
  month_of_birth: 3,
  year_of_birth: 2017,
  gender: 'Male',
};

const visit1 = {
  visitDate: new Date(2017, 3, 5),
  weight: 3.5,
  height: 50,
  muac: 12,
};

const visit2 = {
  visitDate: new Date(2017, 4, 5),
  weight: 5.5,
  height: 60,
  muac: 13,
};

const visit3 = {
  visitDate: new Date(2017, 5, 5),
  weight: 7,
  height: 65,
  muac: 14,
};

const rawVisits = [visit1, visit2, visit3];
/**
 * End of temporary patient and visit data
 */

export { patientInfo, rawVisits };
