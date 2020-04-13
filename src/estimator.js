const covid19ImpactEstimator = (data) => {
  const rO = data.region;
  let factor = 0;
  const expectedBeds = (data.totalHospitalBeds * 0.35);

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
  const severeImpactCurrInfectedCases = Math.trunc(data.reportedCases * 50);
  const infectionsByRequestedTime = (currentlyInfected * Math.trunc(2 ** Math.trunc(factor)));
  const severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
  const sV = (severeImpactCurrInfectedCases * Math.trunc(2 ** Math.trunc(factor)));
  const sISCBRT = Math.trunc(0.15 * sV);
  const iBRT = infectionsByRequestedTime;
 
  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  };

  const severeImpact = {
    currentlyInfected: severeImpactCurrInfectedCases,
    infectionsByRequestedTime: sV,
    severeCasesByRequestedTime: sISCBRT,
    hospitalBedsByRequestedTime: Math.trunc(expectedBeds - sISCBRT)
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
