import React, { useState } from 'react';
import Aux from '../../Hoc/Auxilliary'
import Covid19ImpactEstimator from '../../estimator'

const form = props => {

    let [data, dataHandler] = useState({
        region: {
            name: "Africa",
            avgAge: 19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncomePopulation: 0.71
            },
            periodType: "days",
            timeToElapse: 58,
            reportedCases: 674,
            population: 66622705,
            totalHospitalBeds: 1380614
    });



    return (        
        <Aux>
            <Covid19ImpactEstimator data={data}/> 
            <form>
                <label>Population </label>
                <input type="text" name="population" data="data-population" value={data.population} />
                <label>Time to Elapse </label>
                <input type="text" name="timeToElapse" data="data-time-to-elapse" value={data.timeToElapse} />
                <label>Reported Cases </label>
                <input type="text" name="reportedCases" data="data-reported-cases" value={data.reportedCases} />
                <label>Total Hospital Beds </label>
                <input type="text" name="totalHospitalBeds" data="data-total-hospital-beds" value={data.totalHospitalBeds} />
                <label>Period Type </label>
                <select data="data-period-type" value={data.periodType}>
                    <option value="days"><span>Days</span></option>
                    <option value="weeks"><span>Weeks</span></option>
                    <option value="months"><span>Months</span></option>
                </select>
                <button data="data-go-estimate" >SUBMIT</button>
            </form>
        </Aux>
    )
};

export default form