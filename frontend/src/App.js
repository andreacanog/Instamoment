import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import LandingPage from './components/LandingPage';
import error from './components/error';
import PostIndex from './components/Posts/PostIndex';
import SideNavBar from './components/SideNavBar';
import UserShow from './components/User/UserShow';
import PostCreateForm from './components/Posts/PostCreateForm'; 
import SuggestedUsers from './components/Suggestions/SuggestedUsers';
import Followees from './components/Follow/Followees';
import Followers from './components/Follow/Followers';



function App() {
  
  return (
    <>      
      <PostCreateForm/>
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
        <Route exact path="/feed/posts">
            <PostIndex/>
            <SuggestedUsers/>
        </Route>
        <Route path='/users/:userId'>
          <UserShow/>
          <Followees/>
          <Followers/>
        </Route>
        <Route path={'/*'} component={error} />
        <Redirect to={'/error'} />
      </Switch>
    </>
  );
}

export default App;