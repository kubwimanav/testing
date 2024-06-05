import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Loginform.css'
function Loginform() {


   const [activeForm, setActiveForm] = useState("Youtuber");
  const switchForm = (formType) => {
    setActiveForm(formType);
  };


  const renderForm = () => {
    if (activeForm === "Youtuber") {
      return (
        
            <form className="loginform">
              <div className="login-email-password">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-login-input"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="form-login-input"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-login-checkbox">
                <div className="login-rember">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    // checked={rememberMe}
                    // onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me">Remember Me</label>
                </div>

                <Link to="forget" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
        
      );
    } else if (activeForm === "Client") {
      return (
        <form className="loginform">
          <div className="login-email-password">
            <input
              type="email"
              placeholder="Email"
              className="form-login-input"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="form-login-input"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-login-checkbox">
            <div className="login-rember">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                // checked={rememberMe}
                // onChange={(e) => setRememberMe(e.target.checked)}
                style={{ backgroundColor: "rgb(37,43,49)",color:'white' } }
              />
              <label htmlFor="remember-me">Remember Me</label>
            </div>

            <Link to="forget" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
      );
    }
  }

    
     return (
       <div className="login-container">
         <div className="login-container-paragraph1">
           <div className="login-container-paragraph">
             <p className="login-container-paragraph12">Welcome to Access</p>
             <p>Transport</p>
           </div>
           <p>Company</p>
         </div>

         <div className="login-button-paragraph">
           <div className="login-register">
             <button
               id="buttons"
               onClick={() => switchForm("Youtuber")}
               className={`login-register-login ${
                 activeForm === "Youtuber" ? "active-login-button" : ""
               }`}
             >
               Login
             </button>
             <button
               id="buttons"
               onClick={() => switchForm("Client")}
               className={`login-register-login ${
                 activeForm === "Client" ? "active-login-button" : ""
               }`}
             >
               Register
             </button>
           </div>
           <p>Enter your details to get access</p>
         </div>
         {renderForm()}
       </div>
     );
}

export default Loginform