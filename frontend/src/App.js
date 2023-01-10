import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import LandingPage from './components/LandingPage';
import error from './components/error';
import PostIndex from './components/Posts/PostIndex';
import SideNavBar from './components/SideNavBar';
import UserShow from './components/User/UserShow';
import Form from './store/form';


function App() {
  
  return (
    <>      
      <SideNavBar />
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
        <Form />
        </Route>
        <Route path='/users/:userId'>
          {/* <SideNavBar /> */}
          <UserShow/>
        </Route>
        <Route path={'/*'} component={error} />
        <Redirect to={'/error'} />
      </Switch>
    </>
  );
}

export default App;