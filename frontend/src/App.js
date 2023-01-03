import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import error from './components/error';

function App() {
  
  return (
    <>
      <Navigation/>
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/login">
            <LandingPage/>
        </Route>
        <Route exact path="/">
            <LandingPage/>
        </Route>
        <Route path={'/*'} component={error} />
        <Redirect to={'/error'} />
      </Switch>
    </>
  );
}

export default App;