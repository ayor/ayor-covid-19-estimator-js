const covid19ImpactEstimator = (data) => {
  let factor = 0;

  if (data.periodType === 'days') {
    factor = (data.timeToElapse / 3);
  }
  if (data.periodType === 'weeks') {
    factor = ((data.timeToElapse * 7) / 3);
  }
  if (data.periodType === 'months') {
    factor = ((data.timeToElapse * 30) / 3);
  }

  const currentlyInfected = Math.trunc(data.reportedCases * 10);
  const infectionsByRequestedTime = Math.trunc(currentlyInfected * (2 ** Math.trunc(factor)));
  const severeImpactCurrInfectedCases = Math.trunc(data.reportedCases * 50);
  const sevImpactinfecTime = Math.trunc(severeImpactCurrInfectedCases * (2 ** Math.trunc(factor)));
  const severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
  const severeimpactSevereCasesByRequestedTime = Math.trunc(0.15 * sevImpactinfecTime);
  const expectedBeds = Math.trunc(data.totalHospitalBeds * 0.35);

  //     //dollars in flight calculation 
  //     const impactDollarsinFight = (impactinfectionsByRequestedTime * 0.65 * 1.5) / 30;
  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime: expectedBeds - severeCasesByRequestedTime
  };

  const severeImpact = {
    currentlyInfected: severeImpactCurrInfectedCases,
    infectionsByRequestedTime: sevImpactinfecTime,
    severeCasesByRequestedTime: severeimpactSevereCasesByRequestedTime,
    hospitalBedsByRequestedTime: expectedBeds - severeimpactSevereCasesByRequestedTime
  };

  return (
    {
      data,
      impact,
      severeImpact
    }
  );
};


export default covid19ImpactEstimator;
