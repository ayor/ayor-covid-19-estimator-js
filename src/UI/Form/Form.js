import Aux from '../../Hoc/Auxilliary'

const form = props => (
    <Aux>
        <form>
            <label>Population </label>
            <input type="text" name="population" data="data-population" value={props.population}/>
            <label>Time to Elapse </label>
            <input type="text" name="timeToElapse" data="data-time-to-elapse" value={props.timeToElapse}/>
            <label>Reported Cases </label>
            <input type="text" name="reportedCases" data="data-reported-cases"value={props.reportedCases} />
            <label>Total Hospital Beds </label>
            <input type="text" name="totalHospitalBeds" data="data-total-hospital-beds" value={props.totalHospitalBeds}/>
            <label>Period Type </label>
            <select data="data-period-type" value={props.periodType}>
                <option value="days"><span>Days</span></option>
                <option value="weeks"><span>Weeks</span></option>
                <option value="months"><span>Months</span></option>
            </select>
            <button data="data-go-estimate" >SUBMIT</button>
        </form>
    </Aux>
);

export default form