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
  const [creditType, setCreditType] = useState("");
  const [amountRequested, setAmountRequested] = useState("");
  const [purpose, setPurpose] = useState("");
  const [reasonSelected, setReasonSelected] = useState(null);
  const [email, setEmail] = useState("");
  const [dateOfBrith, setDateOfBrith] = useState(null);
  const [ssn, SetSsn] = useState(null);
  const [driversLicenseNumber, setDriverLicenseNumber] = useState(undefined);
  const [driverLicenseState, setDriverLicenseState] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [previousAddress, setPreviousAddress] = useState(false);
  const[seletedHousing,setSelectedHousing]=useState('')
  
  const [errors, setErrors] = useState(
    { firstname: "Missing firstname" },
    { lastName: "Missing lastnmae" },
    { address: "Missing address" },
    { city: "Missing city" },
    { zipCode: "Missing zipcode" },
    { cellNumber: "Missing number" },
    { state: "Missing state" },
    { email: "Missing email" },
    { username: "Missing Username" },
    { password: "Missing password" }
  );

  const handleHousing = () => {
    setSelectedHousing(e.target.value);
  }

  const togglepreviousAddress = () => {
    setPreviousAddress(!previousAddress);
  };

  const [employerName, setEmployerName] = useState("");
  const [netMonthlyIncome, setNetMonthlyIncome] = useState(undefined);

  const handleCredit = (e) => {
    setCreditType(e.target.value);
    console.log(creditType);
  };
  return (
    <>
      <fieldset>
        <h2>Loan Application</h2>
        <hr />
        <form action="#" className="mainForm">
          <fieldset className="LoanStart">
            <legend>Loan Information</legend>
            <fieldset className="fieldset">
              <legend>Credit Type</legend>
              <input
                type="radio"
                value="Individual"
                checked={creditType === "Individual"}
                onChange={handleCredit}
              />
              Individual
              <input
                type="radio"
                value="Joint"
                checked={creditType === "Joint"}
                onChange={handleCredit}
              />
              Joint
              <br />
              <input
                type="radio"
                name=""
                id=""
                value="Relying on income or
              assests of another person"
                checked={
                  creditType ===
                  "Relying on income or assests of another person"
                }
                onChange={handleCredit}
              />{" "}
              Relying on income or assests of another person
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
              <option value="">Auto Purchase</option>
            </select>
            <br />

            <TextField
              title="Purpose of Loan"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </fieldset>
          <span>
            <p>Primary Borrower</p>
          </span>
          <hr />
          <fieldset className="basic-Information">
            <legend>Basic Information</legend>
            <div className="basic-Info">
              <div className="half-inputs">
                <TextField
                  title="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br />

                <TextField
                  title="Middle Name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <br />

                <TextField
                  title="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br />

                <label htmlFor="">Suffix</label>
                <select name="" id="">
                  <option value="">--Select</option>
                  <option value="MD">MD</option>
                  <option value="Sr.">Sr.</option>
                  <option value="Esq.">Esq.</option>
                  <option value="Trustee">Trustee</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="Jr">Jr.</option>

                  {/* Suffix options are not final */}
                </select>
                <br />
                <DataField caption="Home Phone" />

                <fieldset>
                  <legend>Pirmary</legend>
                  <input type="radio" name="" id="" />
                  Home
                  <input type="radio" name="" id="" />
                  Cell
                </fieldset>
                <fieldset>
                  <legend>Active Military</legend>
                  <input type="radio" name="" id="" />
                  Yes
                  <input type="radio" name="" id="" />
                  No
                </fieldset>
              </div>
              <div className="half-inputs">
                <TextField
                  title="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="date"
                  value={dateOfBrith}
                  onChange={(e) => setDateOfBrith(e.target.value)}
                />
                <br />
                <DataField
                  value={ssn}
                  onChange={(e) => SetSsn(e.target.value)}
                  caption="SSN"
                />
                <br />

                <DataField
                  value={driversLicenseNumber}
                  onChange={(e) => setDriverLicenseNumber(e.target.value)}
                  caption="Driver License Number"
                />
                <br />
                <label htmlFor="">Driver License State</label>
                <br />
                <select
                  className="state"
                  value={driverLicenseState}
                  onChange={(e) => setDriverLicenseState(e.target.value)}
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
              </div>
            </div>
          </fieldset>
          <br />

          <fieldset className="address">
            <legend>Address</legend>
            At least 24 months of residence history are required.
            <fieldset className="current-Address">
              Current Address
              <hr />
              <label htmlFor="">Street</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="">City</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="">state</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="">ZipCode</label>
              <br />
              <input type="number" name="" id="" />
              <br />
              <label htmlFor="">Years</label>
              <br />
              <input type="number" />
              <br />
              <label htmlFor="">Months</label>
              <br />
              <input type="month" name="" id="" />
              <fieldset className="differnt-Mailing ">
                <legend>Mailing address is different</legend>
                <input type="radio" name="" id="" />
                Yes
                <input type="radio" name="" id="" />
                No
              </fieldset>
            </fieldset>
            {previousAddress && (
              <fieldset className="previous-Address">
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
            )}
            <Button onClick={togglepreviousAddress}>
              Add previous address{previousAddress ? "" : ""}
            </Button>
          </fieldset>

          <fieldset>
            <legend>Housing Status</legend>
            <label htmlFor="">Housing Status</label>
           
           
            <select id="housing-Options" value={seletedHousing} onChange={handleHousing}>
              <option value="Own Home">Own Home</option>
              <option value="Live with Parents">Live with Parents </option>
              <option value="Other">Other</option>
              <option value="Renting">Renting</option>
              <option value="Buying Home">Buying Home</option>
            </select>
            <br />
            <label htmlFor="">Monthly Amount($)</label>
            <input type="number" name="" id="" />
          </fieldset>
          <br />

          <span>
            <p>Financial Information</p>
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
              <select name="" id="">
                <option value="">-- Select</option>
                <option value=""></option>
              </select>

              <div className="afterSelect">
                <TextField
                  title="Employer Name "
                  value={employerName}
                  onChange={(e) => setEmployerName(e.target.value)}
                />
                <DataField
                  value={netMonthlyIncome}
                  onChange={(e) => setNetMonthlyIncome(e.target.value)}
                  caption="Net Monthly Income ($)"
                />

                <label htmlFor="">Years</label>
                <br />
                <input type="number" />

                <label htmlFor="">Months</label>
                <br />
                <input type="month" name="" id="" />
                <DataField caption="Work Phone" />

                <label htmlFor="">Income Type</label>
                <select name="" id="">
                  <option value="">-- Select</option>
                  <option value="">Salaried</option>
                  <option value="">Hourly</option>
                  <option value="">Self Employed</option>
                </select>

                <label htmlFor="">Shift Worked </label>
                <select name="" id="">
                  <option value="">-- Select</option>
                  <option value="">Full Time</option>
                  <option value="">Part Time +30 Hrs </option>
                  <option value="">Part Time -30 Hrs </option>
                </select>
                <label htmlFor="">City</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">state</label>
                <br />
                <input type="text" />
              </div>
            </fieldset>
            <Button>Add Borrower income</Button>
          </fieldset>
          <hr />
          <Button>Continue To Submit</Button>
        </form>
      </fieldset>
    </>
  );
}
export default LoanForm;
