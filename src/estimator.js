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
  factor = (data.timeToElapse / 3);
} else if (data.periodType === 'weeks') {
  factor = ((data.timeToElapse * 7) / 3);
} else {
  factor = ((data.timeToElapse * 30) / 3);
}

const currentlyInfected = (data.reportedCases * 10).toFixed(0);
const infectionsByRequestedTime = currentlyInfected * (2 ** Math.trunc(factor));
const severeImpactCurrentlyInfectedCases = Math.trunc(data.reportedCases * 50);
const severeImpactinfecTime = severeImpactCurrentlyInfectedCases * (2 ** Math.trunc(factor));

const impact = {
  currentlyInfected,
  infectionsByRequestedTime
};

const severeImpact = {
  currentlyInfected: severeImpactCurrentlyInfectedCases,
  infectionsByRequestedTime: severeImpactinfecTime
};

const covid19ImpactEstimator = () => ({ data, impact, severeImpact });

export default covid19ImpactEstimator;
