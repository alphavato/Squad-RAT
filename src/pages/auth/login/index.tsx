/*
//        _       _                      _
//       | |     | |                    | |
//   __ _| |_ __ | |__   __ ___   ____ _| |_ ___
//  / _` | | '_ \| '_ \ / _` \ \ / / _` | __/ _ \
// | (_| | | |_) | | | | (_| |\ V / (_| | || (_) |
//  \__,_|_| .__/|_| |_|\__,_| \_/ \__,_|\__\___/
//         | |
//         |_|
// Written by alphavato.
// Email : alphavato23@gmail.com
// Follow me on:
//  Github : https://github.com/alphavato
*/
import AuthenticationLayout from "@/layouts/authentication";
import {useState} from "react";

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <AuthenticationLayout>
      <div>
        <h1 className="form-title">Login</h1>
        <form action="#" method="POST" className="login-form">
          <div className="input-wrapper">
            <input type="email" placeholder="Email" required className="input-field"/>
            <i className="material-symbols-outlined">mail</i>
          </div>
          <div className="input-wrapper">
            <input type={isPasswordShown ? "text" : "password"} placeholder="Password" required
                   className="input-field"/>
            <i className="material-symbols-outlined">lock</i>
            <i onClick={() => setIsPasswordShown(prevState => !prevState)}
               className="material-symbols-outlined eye-icon">
              {isPasswordShown ? 'visibility' : 'visibility_off'}
            </i>
          </div>
          <a href="return:void(0)" className="forgot-password-link">Forgot Password?</a>
          <button type="button" className="login-button">Log in
          </button>
        </form>
      </div>
    </AuthenticationLayout>
  )
}