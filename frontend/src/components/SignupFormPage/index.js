import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, name }))
        .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signup-container">
      <div className='signup-form-content box'>
        <div className='logo'>
            <h1>Instapound</h1>
            <p>Sign up to see photos and videos from your friends.</p>
        </div>
        <div className="divide">
                <div></div>
                <div>OR</div>
                <div></div>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          {/* <label>
            Email */}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            {/* </label> */}
            {/* <label>
            Name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Full Name"
          />
          {/* </label>
          <label>
            Username */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
          {/* </label>
          <label>
            Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          {/* </label> */}
          {/* <label>
            Confirm Password */}
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
            />
          {/* </label> */}
          <button className="signup" type="submit">Sign Up</button>
        </form>


      </div>
      <div className="box goto">
          <p>
              Have an account?
              <a href="/login">  Log in</a>
          </p>
      </div>
    </div>
  );
}

export default SignupFormPage;