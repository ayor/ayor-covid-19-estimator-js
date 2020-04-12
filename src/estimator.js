// const data = {
//     region: {
//     name: 'Africa',
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71
//   },
//   periodType: 'days',
//   timeToElapse: 58,
//   reportedCases: 674,
//   population: 66622705,
//   totalHospitalBeds: 1380614
// };

const currentlyInfected = (data.reportedCases * 10).toFixed(0);
const infectionsByRequestedTime = currentlyInfected * 512;
const severeImpactCurrentlyInfectedCases = (data.reportedCases * 50).toFixed(0);

const impact = {
  currentlyInfected,
  infectionsByRequestedTime
};

const severeImpact = {
  currentlyInfected: severeImpactCurrentlyInfectedCases,
  infectionsByRequestedTime: severeImpactCurrentlyInfectedCases * 512
};

const covid19ImpactEstimator = (data) => ({ data, impact, severeImpact });

export default covid19ImpactEstimator;
