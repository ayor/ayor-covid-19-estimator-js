const covid19ImpactEstimator = (data) => {
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
  const sevImpactinfecTime = (severeImpactCurrInfectedCases * Math.trunc(2 ** Math.trunc(factor)));
  const severeimpactSevereCasesByRequestedTime = Math.trunc(0.15 * sevImpactinfecTime);
  let dollarsInFlight = Math.trunc((infectionsByRequestedTime * 0.65 * 1.5) / 30);

  let casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
  let casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);

  if (data.periodType === 'weeks') {
    casesForICUByRequestedTime = Math.trunc(0.05 * 7 * infectionsByRequestedTime);
    casesForVentilatorsByRequestedTime = Math.trunc(0.02 * 7 * infectionsByRequestedTime);
    dollarsInFlight = Math.trunc((infectionsByRequestedTime * 0.65 * 1.5) / 4);
  }
  if (data.periodType === 'months') {
    casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime * 30);
    casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime * 30);
    dollarsInFlight = Math.trunc((infectionsByRequestedTime * 0.65 * 1.5));
  }

  const hospitalBedsByRequestedTime = Math.trunc(expectedBeds - severeCasesByRequestedTime);

  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  const severeImpact = {
    currentlyInfected: severeImpactCurrInfectedCases,
    infectionsByRequestedTime: sevImpactinfecTime,
    severeCasesByRequestedTime: severeimpactSevereCasesByRequestedTime,
    hospitalBedsByRequestedTime: Math.trunc(expectedBeds - severeimpactSevereCasesByRequestedTime),
    casesForICUByRequestedTime: Math.trunc(0.05 * sevImpactinfecTime),
    casesForVentilatorsByRequestedTime: Math.trunc(0.02 * sevImpactinfecTime),
    dollarsinFight: Math.trunc((sevImpactinfecTime * 0.65 * 1.5) / 30)
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
