import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Profile from '../profile';
import Login from '../login';
import AddPost from '../addPost';


const Main = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Route exact path="/">
      </Route>


      <Route exact path="/posts/:id">
        
      </Route>

      <Route exact path="/user/:username">
        <Profile />
      </Route>

      <Route exact path="/sign">
        <Login />  
      </Route>

      <Route exact path="/post">
        <AddPost />
      </Route>

    </>
  );
};



export default Main;