import React, { useState, useRef, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import { NavLink, useHistory } from 'react-router-dom';


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const passwordAnimateRef = useRef(new Array());
  let history = useHistory();



  if (sessionUser) return <Redirect to="/" />;

  const handleDemoLogin = (e) => {
    return dispatch(sessionActions.login({credential: "decor@user.io", password: "password"}))
    .then(() => {history.push('/feed/posts')})
  }

  const handleShowPassword = (ele) => {
    ele.preventDefault();
    let inputType = passwordAnimateRef.current.getAttritube('type');
    if (inputType.getAttribute('type') === 'text') {
      inputType.setAttribute('type', 'password')
      ele.innerHTML = 'Show'
    } else {
        inputType.setAttribute('type', 'text')
        ele.innerHTML = 'Hide'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => {history.push('/feed/posts')})
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

  return (
    <div className='form-container-4'>

      <div className='form-content box'>

        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className='logo'>
              <h1>Instapound</h1>
          </div>
        </NavLink>

        <div className='singin-form'>

          <div className='form-group'>
            <div className='animate-input'>
              <input
                type="text"
                value={credential}
                placeholder="Username or email"
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='animate-input' ref={passwordAnimateRef}>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="show-password-button" onClick={handleShowPassword}>Show</button>
            </div>
          </div>

          <div className="button-group">
              <button className="button-login" id="signin-btn" onClick={handleSubmit}>
                  Log In
              </button>
          </div>

          <div className="divide">
              <div></div>
              <div>OR</div>
              <div></div>
          </div>

          <ul className="error-ul">
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>

          <div className='forgot-and-demo-container'>
            <a href="#" className="forgot-pw">Forgot password?</a>
            <button onClick={handleDemoLogin} className="demoButton">Demo Login</button>
          </div>

        </div>

      </div>

      <div className="box goto">
        <p>
          Don't have an account?
          <a href="/signup">  Sign up</a>
        </p>
      </div>

      {/* <div className="download">
        <p>Get the app.</p>
        <div className="link">
          <a href="#">
            <img src="" alt=""/>
          </a>
          <a href="#">
            <img src="" alt=""/>
          </a>
        </div>
      </div> */}

    </div>
  );
}

export default LoginFormPage;