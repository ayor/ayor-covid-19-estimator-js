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
  const dIF = (iBRT * rO.avgDailyIncomePopulation * rO.avgDailyIncomeInUSD);
  let dollarsInFlight = Math.trunc(dIF / data.timeToElapse);

  const casesForICUByRequestedTime = Math.trunc(0.05 * iBRT);
  const casesForVentilatorsByRequestedTime = Math.trunc(0.02 * iBRT);
  const hospitalBedsByRequestedTime = Math.trunc(expectedBeds - severeCasesByRequestedTime);
  const dO = Math.trunc((sV * rO.avgDailyIncomePopulation * rO.avgDailyIncomeInUSD));
  const dOSV = Math.trunc(dO * data.population / data.timeToElapse);

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
    infectionsByRequestedTime: sV,
    severeCasesByRequestedTime: sISCBRT,
    hospitalBedsByRequestedTime: Math.trunc(expectedBeds - sISCBRT),
    casesForICUByRequestedTime: Math.trunc(0.05 * sV),
    casesForVentilatorsByRequestedTime: Math.trunc(0.02 * sV),
    dollarsinFight: dOSV
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
