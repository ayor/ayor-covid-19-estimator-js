import React, { useState } from 'react';
import Aux from '../../Hoc/Auxilliary'
import InputComponent from '../Input/Input'
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

    let [InputState, InputStateHandler] = useState([
        {
            name: "population",
            data: "data-population",
            property: 0,
            type: "number",
            inputType:'input'
        },
        {
            name: "timeToElapse",
            data: "data-time-to-elapse",
            property: 0,
            type: "number",
            inputType:'input'
        },
        {
            name: "reportedCases",
            data: "data-reported-cases",
            property: 0,
            type: "number",
            inputType:'input'
        },
        {
            name: "totalHospitalBeds",
            data: "data-total-hospital-beds",
            property: 0,
            type: "number",
            inputType:'input'
        },
        {
            name: "periodType",
            data: "data-period-type",
            property: 0,
            inputType:'select',
            options: ["days","weeks","months"]
        },
    ])

    let transformedInput = InputState.map(el=>( <InputComponent name={el.name} data={el.data} value={el.property} type={el.type} inputType={el.inputType} options={el.options}/>)
    )
    return (
        <Aux>

            <form>
                {transformedInput}
                {/* <label>Period Type </label>
                <select data="data-period-type" value={data.periodType}>
                    <option value="days"><span>Days</span></option>
                    <option value="weeks"><span>Weeks</span></option>
                    <option value="months"><span>Months</span></option>
                </select> */}
                <button data="data-go-estimate" >SUBMIT</button>
            </form>
        </Aux>
    )
};

export default form