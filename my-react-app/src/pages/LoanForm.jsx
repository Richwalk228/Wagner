import { Button } from "reactstrap";
import { useState } from "react";

function DataField(props) {
  return (
    <>
      <label htmlFor="">{props.caption}</label>
      <br />
      <input
        className="loanApplication"
        type="number"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

function TextField(props) {
  return (
    <>
      <label htmlFor="">{props.title}</label>
      <br />
      <input type="text" value={props.value} onChange={props.onChange} />
    </>
  );
}

function LoanForm() {
  const [amountRequested, setAmountRequested] = useState("");
  const [purpose, setPurpose] = useState("");
  const [reasonSelected, setReasonSelected] = useState(null);
  const [email, setEmail] = useState("");
  const [dateOfBrith, setDateOfBrith] = useState(null);
  const[ssn,SetSsn]=useState(null);
  const[driversLicenseNumber,setDriverLicenseNumber]=useState(undefined)
  const[state,setState]=useState(null)

  return (
    <>
      <div>
        <h1>Loan Application</h1>
        <hr />
        <form action="#" className="mainForm">
          <fieldset className="LoanStart Field">
            <legend>Loan Information</legend>
            <fieldset className="Field">
              <legend>Credit Type</legend>
              <input type="radio" name="" id="" />
              Individual
              <input type="radio" />
              Joint
              <input type="checkbox" name="" id="" /> Relying on income or
              assests of another person
            </fieldset>

            <DataField
              value={amountRequested}
              onChange={(e) => setAmountRequested(e.target.value)}
              caption="Amount Requested"
            />
            <br />
            <label htmlFor="">Reason for loan</label>
            <br />
            <select
              name=""
              id=""
              value={reasonSelected}
              onChange={(e) => setReasonSelected(e.target.value)}
            >
              <option value="">Personal Loan</option>
              <option value="">Auto Loan</option>
            </select>
            <br />

            <TextField
              title="Purpose of Loan"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </fieldset>
          <br />
          <span>
            <p>Primary Borrower</p>
          </span>
          <hr />
          <fieldset className="Field">
            <legend>Basic Information</legend>
            <TextField
              title="First Name"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
            <label htmlFor="">Middle Name </label>
            <input type="text" />
            <TextField
              title="Last Name"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
            <label htmlFor="">Suffix</label>
            <input type="text" />
            <DataField caption="Home Phone" />

            <TextField
              title="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="date"
              value={dateOfBrith}
              onChange={(e) => setDateOfBrith(e.target.value)}
            />

       <DataField
       value={ssn}
       onChange={(e) => SetSsn(e.target.value) }
       caption="SSN"
       />
       <DataField
       value={driversLicenseNumber}
       onChange={(e)=>setDriverLicenseNumber(e.target.value)}
       caption="Driver License Number"
       />
             <select
            className="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
         
            <fieldset className="Field">
              <legend>Pirmary</legend>
              <input type="radio" name="" id="" />
              Home
              <input type="radio" name="" id="" />
              Cell
            </fieldset>
            <fieldset className="Field">
              <legend>Active Military</legend>
              <input type="radio" name="" id="" />
              <input type="radio" name="" id="" />
            </fieldset>
          </fieldset>
          <br />

          <fieldset>
            <legend>Address</legend>
            <fieldset>
              <legend>Current Address</legend>
              <label htmlFor="">Street</label>
              <input type="text" />
              <label htmlFor="">City</label>
              <input type="text" />
              <label htmlFor="">state</label>
              <input type="text" />
              <label htmlFor="">ZipCode</label>
              <input type="number" name="" id="" />
              <label htmlFor="">Years</label>
              <input type="number" />
              <label htmlFor="">Months</label>
              <input type="month" name="" id="" />
              <fieldset>
                <legend>Mailing address is different</legend>
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
              </fieldset>
            </fieldset>
            <fieldset>
              <legend>Previous Address</legend>
              <label htmlFor="">Street</label>
              <input type="text" />
              <label htmlFor="">City</label>
              <input type="text" />
              <label htmlFor="">state</label>
              <input type="text" />
              <label htmlFor="">Zip</label>
              <input type="number" name="" id="" />
              <label htmlFor="">Years</label>
              <input type="number" />
              <label htmlFor="">Months</label>
              <input type="month" name="" id="" />
            </fieldset>
            <Button>Add previous address</Button>
          </fieldset>

          <fieldset>
            <legend>Housing Status</legend>
            <input type="text" />

            <label htmlFor="">Monthly Amount($)</label>
            <input type="number" name="" id="" />
          </fieldset>
          <br />
          <span>
            <p>Financail Information</p>
          </span>
          <hr />

          <fieldset>
            <legend>Employment History</legend>
            <span>
              <p>
                Please add 36months of Employment history for atleast one
                Borrower
              </p>
            </span>
            <br />
            <fieldset>
              <legend>Primary Borrower</legend>
              <title>Primary income</title>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </fieldset>
            <Button>Add Borrower income</Button>
          </fieldset>
          <hr />
          <Button>Continue To Submit</Button>
        </form>
      </div>
    </>
  );
}
export default LoanForm;
