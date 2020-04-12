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

const covid19ImpactEstimator = (data) => {
    const input = data;
    return({ data: input, impact, severeImpact })};

export default covid19ImpactEstimator;
