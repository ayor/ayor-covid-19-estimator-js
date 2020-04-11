const covid19ImpactEstimator = (data) =>{
    // data = {
    //     region: {
    //     name: "Africa",
    //     avgAge: 19.7,
    //     avgDailyIncomeInUSD: 5,
    //     avgDailyIncomePopulation: 0.71
    //     },
    //     periodType: "days",
    //     timeToElapse: 58,
    //     reportedCases: 674,
    //     population: 66622705,
    //     totalHospitalBeds: 1380614
    //     }


//to estiamte the number of infected people 28 days from now
    //infections after 28 days  currentlyInfected * 512       
    //sending out data impact
    //impact = { currentlyInfected : data.reportedCases * 10}

    const impactCurrentinfectedValue = data.reportedCases * 10;
    const severeCurrentinfectedValue = data.reportedCases * 50;

    //infections by requested time
    const impactinfectionsByRequestedTime = impactCurrentinfectedValue * 512;
    const severeinfectionsByRequestedTime = severeCurrentinfectedValue * 512;

        //severe cases by requested time
        const impactSevereCasesByRequestedTime = 0.15 * impactinfectionsByRequestedTime
        const severeimpactSevereCasesByRequestedTime = 0.15 * severeinfectionsByRequestedTime

    //EXPECTED hosptial beds 
    const expectedBeds = data.totalHospitalBeds * 0.35

    //dollars in flight calculation 
    const impactDollarsinFight = (impactinfectionsByRequestedTime * 0.65 * 1.5) / 30;


    let impact = {
        currentlyInfected :  impactCurrentinfectedValue.toFixed(0),
        //infections in 28 days
        infectionsByRequestedTime :impactinfectionsByRequestedTime.toFixed(0),
        severeCasesByRequestedTime : impactSevereCasesByRequestedTime.toFixed(0),
        hospitalBedsByRequestedTime: expectedBeds - impactSevereCasesByRequestedTime.toFixed(0),
        casesForICUByRequestedTime: 0.05 * impactinfectionsByRequestedTime.toFixed(0),
        casesForVentilatorsByRequestedTime : 0.02 * impactinfectionsByRequestedTime.toFixed(0),
        dollarsInFlight : impactDollarsinFight
    };
    let severeImpact = {
        currentlyInfected :  severeCurrentinfectedValue.toFixed(0),
        infectionsByRequestedTime : severeinfectionsByRequestedTime.toFixed(0), //infections in 28 days
        severeCasesByRequestedTime : severeimpactSevereCasesByRequestedTime.toFixed(0),
        hospitalBedsByRequestedTime : expectedBeds - severeimpactSevereCasesByRequestedTime.toFixed(0),
        casesForICUByRequestedTime: 0.05 * severeinfectionsByRequestedTime.toFixed(0),
        casesForVentilatorsByRequestedTime: 0.02 * severeinfectionsByRequestedTime.toFixed(0),
        dollarsInFlight : severeImpactDollarsinFight.toFixed(0)
    };
    
};

export default covid19ImpactEstimator;
