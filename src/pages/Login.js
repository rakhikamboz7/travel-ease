import React, { useState } from 'react';
import '../Styles/LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 
function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleLoginClick = () => {
    setIsSignup(false);
    setIsLoginClicked(true);
  };

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  return (
    <div
      className="LoginPageWithOtpVerification"
      style={{
        width: 1400,
        height: 850, // increased height for additional fields
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.88)',
      }}
    >
      <div className={`Transitioning ${isSignup ? 'signup' : ''}`} />

      <div className={`FormContainer ${isSignup ? 'flipped' : ''}`}>
        {/* Login Form */}
        <div className="Loginform">
          <h2>Login</h2>
          <div className="google-login">
         
            <button className="google-btn"><FontAwesomeIcon icon={faGoogle} className="google-icon" /> Login with Google</button>
            <p>Or login with</p>
          </div>
          <label>Username or Email</label>
          <input type="text" placeholder="Enter Username or Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
         

          <button className="login-btn" onClick={handleLoginClick}>Login</button>

          {/* Google Login */}
          
        </div>

        {/* Signup Form */}
        <div className="Signupform">
          <h2>SignUp</h2>
          <div className="google-signup">
          
            <button className="google-btn"> <FontAwesomeIcon icon={faGoogle} className="google-icon" /> Sign up with Google</button>
            <p>Or sign up with</p>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Enter Username" />
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter Phone Number" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
          <button className="signup-btn"onClick={handleSignupClick}>SignUp</button>

          {/* Google Signup */}
          
        </div>
      </div>

      {/* Login and Signup Buttons */}
      <div
        className="LoginButton"
        onClick={handleLoginClick}
        style={{
          width: 80,
          height: 37,
          left: 390,
          top: 170,
          position: 'absolute',
          mixBlendMode: 'hard-light',
          color: isLoginClicked ? '#043b63' : '#ffffff',
          fontSize: 24,
          fontFamily: 'Jost',
          fontWeight: '700',
          wordWrap: 'break-word',
          cursor: 'pointer',
        }}
      >
        Login
      </div>

      <div
        className="Signup"
        onClick={handleSignupClick}
        style={{
          width: 109,
          height: 35,
          left: 861,
          top: 165,
          position: 'absolute',
          mixBlendMode: 'hard-light',
          color: '#044A71',
          fontSize: 24,
          fontFamily: 'jsMath-cmbx10',
          fontWeight: '700',
          wordWrap: 'break-word',
          cursor: 'pointer',
        }}
      >
        SignUp
      </div>
    </div>
  );
}

export default Login;
