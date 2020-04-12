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

const currentlyInfected = (data.reportedCases * 10).toFixed(0);
const monthlyInfectionsByRequestedTime = (currentlyInfected * 1024);
const severeImpactCurrentlyInfectedCases = (data.reportedCases * 50).toFixed(0);
const monthlySevereImpactCurrentlyInfectedCases = severeImpactCurrentlyInfectedCases * 1024;

const impact = {
  currentlyInfected,
  infectionsByRequestedTime: {
    days: monthlyInfectionsByRequestedTime / 30,
    weeks: monthlyInfectionsByRequestedTime / 4,
    months: monthlyInfectionsByRequestedTime
  }
};

const severeImpact = {
  currentlyInfected: severeImpactCurrentlyInfectedCases,
  infectionsByRequestedTime: {
    days: monthlySevereImpactCurrentlyInfectedCases / 30,
    weeks: monthlySevereImpactCurrentlyInfectedCases / 4,
    months: monthlySevereImpactCurrentlyInfectedCases
  }
};

const covid19ImpactEstimator = () => ({ data, impact, severeImpact });

export default covid19ImpactEstimator;
