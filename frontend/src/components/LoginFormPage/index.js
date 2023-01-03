import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
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
      <div className='container'>
        <div className='form-content'>
          <div className='logo'>
            <h1>Instapound</h1>
          </div>

          <div className='Singin-form'>

            <div className='form'>
              <div className='form-input'>
                <span>
                  Username or email
                </span>
                <input
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </div>

              <div className="form">
                <div className="form-input">
                  <span>
                      Password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {/* <button>Show</button> */}
              </div>
            </div>

          </div>

          
          <div className="bottom-group">
              <button className="bottom-login" id="signin-btn" onClick={handleSubmit}>
                  Log In
              </button>
          </div>
          <div className="divide">
              <div></div>
              <div>OR</div>
              <div></div>
          </div>
          <a href="#" className="forgot-pw">Forgot password?</a>

        </div>

      </div>
      <div className="box-container">
          <p>
              Don't have an account?
              <a href="#">Sign up</a>
          </p>
      </div>

      <div className="download">
        <p>Get the app.</p>
        <div className="link">
          <a href="#">
              <img src="" alt=""/>
          </a>
          <a href="#">
              <img src="" alt=""/>
          </a>
        </div>
      </div>




    
      {/* <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form> */}
    </div>
  );
}

export default LoginFormPage;