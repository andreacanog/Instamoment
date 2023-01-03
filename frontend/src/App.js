import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
    <Navigation isLoaded={true} />
      <Switch>
        <Route path="/">
          <LandingPage/>
          {/* <LoginFormPage /> */}
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;