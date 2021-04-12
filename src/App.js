import { useState } from "react";
import "./App.css";
import $ from "jquery";

function App() {
  // $(document).ready(function () {
  //   $(".login-info-box").fadeOut();
  //   $(".login-show").addClass("show-log-panel");
  // });

  // $('.login-reg-panel input[type="radio"]').on("change", function () {
  //   if ($("#log-login-show").is(":checked")) {
  //     $(".register-info-box").fadeOut();
  //     $(".login-info-box").fadeIn();

  //     $(".white-panel").addClass("right-log");
  //     $(".register-show").addClass("show-log-panel");
  //     $(".login-show").removeClass("show-log-panel");
  //   } else if ($("#log-reg-show").is(":checked")) {
  //     $(".register-info-box").fadeIn();
  //     $(".login-info-box").fadeOut();

  //     $(".white-panel").removeClass("right-log");

  //     $(".login-show").addClass("show-log-panel");
  //     $(".register-show").removeClass("show-log-panel");
  //   }
  // });

  const [loginStatus, setLoginStatus] = useState(true);

  const handelChange = (event) => {
    event.persist();
    // console.log(event.target.checked);
    setLoginStatus(!loginStatus);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="login-reg-panel">
          <div className="login-info-box">
            <h2>Have an account?</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <label id="label-register" htmlFor="log-reg-show">
              Login
            </label>
            <input
              type="radio"
              name="active-log-panel"
              id="log-reg-show"
              checked="checked"
              onChange={handelChange}
            />
          </div>

          <div className={loginStatus ? "register-info-box" : "d-none"}>
            <h2>Don't have an account?</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <label id="label-login" htmlFor="log-login-show">
              Register
            </label>
            <input
              type="radio"
              name="active-log-panel"
              id="log-login-show"
              onChange={handelChange}
            />
          </div>

          <div
            className={loginStatus ? "white-panel" : "white-panel right-log"}
          >
            <div
              className={
                !loginStatus ? "login-show" : "login-show show-log-panel"
              }
            >
              <h2>LOGIN</h2>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="button" value="Login" />
              <a href="">Forgot password?</a>
              <button
                className="btn btn-primary mobile-view"
                onClick={handelChange}
              >
                REGISTER
              </button>
              <h3 className="mobile-view-h3">Are not registered yet?</h3>
            </div>
            <div
              className={
                !loginStatus ? "register-show show-log-panel" : "register-show"
              }
            >
              <h2>REGISTER</h2>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="button" value="Register" />
              <a href="" onClick={handelChange}>
                Already have account?
              </a>
              <button
                className="btn btn-primary mobile-view-login"
                onClick={handelChange}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
