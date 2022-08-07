import React, { Fragment,useRef,useState } from 'react'
import './LoginSignUp.css'
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FaceIcon from '@mui/icons-material/PermIdentity';



const LoginSignUp = () => {
  const loginTab=useRef(null);
  const registerTab=useRef(null);
const switcherTab=useRef(null);

const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

const switchTabs = (e, tab) => {
  if (tab === "login") {
    switcherTab.current.classList.add("shiftToNeutral");
    switcherTab.current.classList.remove("shiftToRight");

    registerTab.current.classList.remove("shiftToNeutralForm");
    loginTab.current.classList.remove("shiftToLeft");
  }
  if (tab === "register") {
    switcherTab.current.classList.add("shiftToRight");
    switcherTab.current.classList.remove("shiftToNeutral");

    registerTab.current.classList.add("shiftToNeutralForm");
    loginTab.current.classList.add("shiftToLeft");
  }
};

const loginSubmit=()=>{
  console.log("form submitted");
}

  return (
        <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
             
              >
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                   
                 
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                 
                  
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    // value={password}
                
                  />
                </div>

                <div id="registerImage">
                  <img src=""alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                  
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
  )
}

export default LoginSignUp