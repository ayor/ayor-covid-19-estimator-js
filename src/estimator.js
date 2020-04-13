const covid19ImpactEstimator = (data) => {

let factor = 0;

if (data.periodType === 'days') {
  factor = (data.timeToElapse / 3);
} else if (data.periodType === 'weeks') {
  factor = ((data.timeToElapse * 7) / 3);
} else {
  factor = ((data.timeToElapse * 30) / 3);
}

const currentlyInfected = Math.trunc(data.reportedCases * 10);
const infectionsByRequestedTime = Math.trunc(currentlyInfected * (2 ** Math.trunc(factor)));
const severeImpactCurrInfectedCases = Math.trunc(data.reportedCases * 50);
const severImpactinfecTime = Math.trunc(severeImpactCurrInfectedCases * (2 ** Math.trunc(factor)));

console.log(currentlyInfected,infectionsByRequestedTime,severeImpactCurrInfectedCases,severImpactinfecTime);
const impact = {
  currentlyInfected,
  infectionsByRequestedTime
};

const severeImpact = {
  currentlyInfected: severeImpactCurrInfectedCases,
  infectionsByRequestedTime: severImpactinfecTime
};

  return (
    {
     data,
     impact,
    severeImpact 
    }
  )
};


export default covid19ImpactEstimator;
