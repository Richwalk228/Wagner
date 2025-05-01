import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { Button } from "reactstrap";

function ApplyNow() {
  const navigate = useNavigate();

  return (
    <>
      <div className="application-Start">
        <h3>Start Application</h3>
        <hr className="topline"/>
        <div className="innersection lghpadding">
          <h5>
            New Application
            <hr />
          </h5>
          <p>
            We take pride in giving our customers the best service experience
            possible, and that includes protecting your information from
            identity theft. Rest assured that the information you provide in
            this application will be submitted over a secure transmission and
            will remain confidential.
          </p>
         <Button className="applybtn" tag={Link} to={'/Disclosures'} >Start New Application </Button>  

         <h5>Resume Your Application
          <hr />
         </h5>
         
          <p>
            If you previously started an application and were unable to complete
            it, you have the option of doing so now. In order to resume an
            application, you will need your reference number, last name, last
            four digits of your Social Security Number, and your date of birth.
          </p> 
          <Button tag={Link} to={"/Resume"} className="applybtn">
            Resume an existing application
          </Button>
        </div>
      </div>
    </>
  );
}
export default ApplyNow;
