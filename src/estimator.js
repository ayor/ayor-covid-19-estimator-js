const data = {};

let factor = 0;

if (data.periodType === 'days') {
  factor = (data.timeToElapse / 3);
} else if (data.periodType === 'weeks') {
  factor = ((data.timeToElapse * 7) / 3);
} else {
  factor = ((data.timeToElapse * 30) / 3);
}

const currentlyInfected = Math.trunc(data.reportedCases * 10);
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
