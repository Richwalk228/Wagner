import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Button } from "reactstrap";
function NewLoan() {
  const [borrowAmount, setBorrowAmount] = useState(0);
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <>
      <div className="preScreen">
        <h3>Pre Screen Information</h3>
        <hr />
        <span>
          <p>
            Thank you for choosing to apply with Wagner Financial Services!
            Since 1988, Wagner has offered same-day personal loans and
            automobile financing to residents of the greater Triad area. Wagner
            is family owned and operated which ensures you get personalized and
            knowledgeable service with every interaction.
          </p>
        </span>
        <br />
        <span>
          <p>
            Please answer the following questions to start your application with
            Wagner. You will be able to save and review your progress before
            submitting the application. We may contact you before processing
            your application if we need additional information or clarification.
            This helps us understand your unique situation and get an answer
            back to you as fast as possible. We appreciate your interest in
            Wagner Financial Services and hope we will be able to offer a loan
            program that addresses your needs.
          </p>
        </span>
        <div>
          <h5>Borrow Amount</h5>
          <input
            type="number"
            onChange={(e) => setBorrowAmount(e.target.value)}
            value={borrowAmount}
          />
        </div>
        <div className="">
          <h5>Primary Borrower</h5>
          <input
            type="text"
            onChange={(e) => setStreetAddress(e.target.value)}
            value={streetAddress}
          />
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <input
            type="text"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
          <input
            type="text"
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
          />
        </div>
        <Button tag={Link} to={'/Disclosures'}>Next</Button>
      </div>
    </>
  );
}

export default NewLoan;
