const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

let factor = 0;

if (data.periodType === 'days') {
  factor = (data.timeToElapse / 3).toFixed(0);
}

if (data.periodType === 'weeks') {
  factor = (data.timeToElapse / 6).toFixed(0);
}
if (data.periodType === 'months') {
  factor = (data.timeToElapse / 10).toFixed(0);
}

const currentlyInfected = (data.reportedCases * 10).toFixed(0);
const infectionsByRequestedTime = currentlyInfected * (2 ** factor);
const severeImpactCurrentlyInfectedCases = (data.reportedCases * 50).toFixed(0);
const severeImpactinfectionsByRequestedTime = severeImpactCurrentlyInfectedCases * (2 ** factor);

const impact = {
  currentlyInfected,
  infectionsByRequestedTime
};

const severeImpact = {
  currentlyInfected: severeImpactCurrentlyInfectedCases,
  infectionsByRequestedTime: severeImpactinfectionsByRequestedTime
};

const covid19ImpactEstimator = () => ({ data, impact, severeImpact });

export default covid19ImpactEstimator;
