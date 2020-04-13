const covid19ImpactEstimator = (data) => {
  let { rO } = data[region];
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
  const sISCBRT = Math.trunc(0.15 * sevImpactinfecTime);
  let iBRT = infectionsByRequestedTime;
  const dIF = (iBRT * rO.avgDailyIncomePopulation * rO.avgDailyIncomeInUSD);
  const dollarsInFlight = Math.trunc(dIF / data.timeToElapse);

  const casesForICUByRequestedTime = Math.trunc(0.05 * iBRT);
  const casesForVentilatorsByRequestedTime = Math.trunc(0.02 * iBRT);
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
    severeCasesByRequestedTime: sISCBRT,
    hospitalBedsByRequestedTime: Math.trunc(expectedBeds - sISCBRT),
    casesForICUByRequestedTime: Math.trunc(0.05 * sevImpactinfecTime),
    casesForVentilatorsByRequestedTime: Math.trunc(0.02 * sevImpactinfecTime),
    dollarsinFight: Math.trunc((sevImpactinfecTime * rO.avgDailyIncomePopulation * rO.avgDailyIncomeInUSD) / data.timeToElapse)
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
