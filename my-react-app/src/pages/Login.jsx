import { useNavigate } from "react-router";
import { useState } from "react";
import Logo from  '../pictures/Wagner-logo.jpg';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 

  function checkLogin() {
    setError(null)
  }

  
  function confirm(){
    navigate('./Dashboard')
      }
  return (
    <>
    {error ? <div>{error}</div> : null}
      <div className="login-box">
       <img src={Logo} alt="" />
        <form>
          <div className="user-box">
            <input type="text" name="" required="" 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}/>
            <label>Username</label>
            
          </div>
          <div className="user-box">
            <input 
            type="password" 
            name="" 
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            />
            <label>Password</label>
         
          </div>
          <button className="login-submit" onClick={confirm}>Login</button>
        </form>
        <span className="forgotten"><a href="">Forgot Password</a></span>
        <div className="createAccount"><a href='./Registration' >Create an account</a></div>
      </div>
    </>
  );
}

export default Login;
