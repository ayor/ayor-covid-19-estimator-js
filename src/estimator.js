const covid19ImpactEstimator = (data) =>{
// //to estiamte the number of infected people 28 days from now
//     //infections after 28 days  currentlyInfected * 512       
//     //sending out data impact
//     //impact = { currentlyInfected : data.reportedCases * 10}

//     const impactCurrentinfectedValue = data.reportedCases * 10;
//     const severeCurrentinfectedValue = data.reportedCases * 50;

//     //infections by requested time
//     const impactinfectionsByRequestedTime = impactCurrentinfectedValue * 512;
//     const severeinfectionsByRequestedTime = severeCurrentinfectedValue * 512;

//         //severe cases by requested time
//         const impactSevereCasesByRequestedTime = 0.15 * impactinfectionsByRequestedTime
//         const severeimpactSevereCasesByRequestedTime = 0.15 * severeinfectionsByRequestedTime

//     //EXPECTED hosptial beds 
//     const expectedBeds = data.totalHospitalBeds * 0.35

//     //dollars in flight calculation 
//     const impactDollarsinFight = (impactinfectionsByRequestedTime * 0.65 * 1.5) / 30;


//     let impactEntry = {
//         currentlyInfected :  impactCurrentinfectedValue.toFixed(0),
//         //infections in 28 days
//         infectionsByRequestedTime :impactinfectionsByRequestedTime.toFixed(0),
//         severeCasesByRequestedTime : impactSevereCasesByRequestedTime.toFixed(0),
//         hospitalBedsByRequestedTime: expectedBeds - impactSevereCasesByRequestedTime.toFixed(0),
//         casesForICUByRequestedTime: 0.05 * impactinfectionsByRequestedTime.toFixed(0),
//         casesForVentilatorsByRequestedTime : 0.02 * impactinfectionsByRequestedTime.toFixed(0),
//         dollarsInFlight : impactDollarsinFight
//     };
//     let severeImpactEntry = {
//         currentlyInfected :  severeCurrentinfectedValue.toFixed(0),
//         infectionsByRequestedTime : severeinfectionsByRequestedTime.toFixed(0), //infections in 28 days
//         severeCasesByRequestedTime : severeimpactSevereCasesByRequestedTime.toFixed(0),
//         hospitalBedsByRequestedTime : expectedBeds - severeimpactSevereCasesByRequestedTime.toFixed(0),
//         casesForICUByRequestedTime: 0.05 * severeinfectionsByRequestedTime.toFixed(0),
//         casesForVentilatorsByRequestedTime: 0.02 * severeinfectionsByRequestedTime.toFixed(0),
//         dollarsInFlight : severeImpactDollarsinFight.toFixed(0)
//     };
    
    return(
        {
            data,
            impact : {},
            severimpact : {}
        }
    )
};

export default covid19ImpactEstimator;
