import PhoneInput from "react-phone-number-input";
import { useState, useCallback, use } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router";
import Dashboard from "./Dashboard";

function Registration() {
  const navigate = useNavigate();
  const onDrop = useCallback((acceptedId) => {
    console.log(acceptedId);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const emptyPerson = {
    firstName: undefined,
    lastName: undefined,
    SSN: undefined,
    cellNumber: undefined,
    email: undefined,
    dateOfBrith: undefined,
    password: undefined,
  };
  const [person, setPerson] = useState(emptyPerson);
  const [value, setValue] = useState([]);

  function handleChange(name, e) {
    setPerson((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
    checkError();
  }

  function confirm() {
    navigate("./Dashboard");
  }

  return (
    <>
      <h1 className="Registration-h1">
        <a href="">Welcome To Wagner!!!</a>
      </h1>

      <div className="registration-Container">
        <div>
          <input
            className="identify"
            type="text"
            placeholder="Firstname"
            value={person.firstName}
            onChange={(e) => handleChange("firstName", e)}
            required
          />

          <input
            className="identify"
            type="text"
            placeholder="Lastname"
            value={person.lastName}
            onChange={(e) => handleChange("lastName", e)}
            required
          />
        </div>
        <input
          className="DOB"
          type="date"
          id="birthday"
          name="birthday"
          value={person.dateOfBrith}
          onChange={(e) => handleChange("dateOfBrith", e)}
          required
        />

        <input
          className="identify email"
          type="text"
          name="email address"
          placeholder="Email"
          value={person.email}
          onChange={(e) => handleChange("email", e)}
          required
        />

        <input
          className="socailSecu"
          type="number"
          placeholder="ssn"
          value={person.SSN}
          onChange={(e) => handleChange("SSN", e)}
          required
        />
        <input
          className="password"
          type="password"
          placeholder="Passkey"
          value={person.password}
          onChange={(e) => handleChange("password", e)}
          required
        />
        <div>
          <input type="radio" /> Get Sent verification via Email or SMS
          <br />
          <input type="radio" /> Verify via ID
        </div>
        <div className="File" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <div className="authentication"></div>
        <button className="confirmbtn" onClick={confirm}>
          confirm
        </button>
      </div>
    </>
  );
}

export default Registration;
