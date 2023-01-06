import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
// import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import error from './components/error';
import PostIndex from './components/Posts/PostIndex';
// import PostIndexItem from './components/Posts/PostIndexItem';
import SideNavBar from './components/SideNavBar';


function App() {
  
  return (
    <>      
      <SideNavBar/>
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
        <Route exact path="/feed/posts" component={PostIndex}>
        </Route>
        <Route path={'/*'} component={error} />
        <Redirect to={'/error'} />
      </Switch>
    </>
  );
}

export default App;