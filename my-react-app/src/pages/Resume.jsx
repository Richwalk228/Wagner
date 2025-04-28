import { useState } from "react";

function Resume() {
  const [referenceNumber, setreferenceNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastfour, setlastFour] = useState(null);
  const [dateOfBrith, setDateOfBrith] = useState(null);

  return (
    <>
      <div className="Resume-container">
        <h3>Resume Application</h3>
        <hr />
        <span>
          <p>
            To resume your application please fill out the information below.
          </p>
        </span>
        <label htmlFor="">referenceNumber</label>
        <br />
        <input
          type="Number"
          value={referenceNumber}
          onChange={(e) => setreferenceNumber(e.target.value)}
        />
        <br />
<label htmlFor="">Last Name</label>
<br />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="">Last four of socail</label>
        <br />
        <input
          type="Number"
          value={lastfour}
          onChange={(e) => setlastFour(e.target.value)}
        />
        <br />
        <label htmlFor="">Date of brith</label>
        <br />
        <input
          type="date"
          value={dateOfBrith}
          onChange={(e) => setDateOfBrith(e.target.value)}
        />
      </div>
    </>
  );
}
export default Resume;
