import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Post from '../post';
import Auth from '../auth';
import Signup from '../signup';
import Login from '../signin';
import EditBody from '../editBody';
import AddBottom from '../addBottom';
import AddPost from '../addPost'
const Main = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Route exact path="/">
        <Home/>
        <AddBottom/>
      </Route>


      <Route exact path="/post/:id">
        <Post/>
        <AddBottom/>
      </Route>
      <Route exact path="/body/:id">
        
        <EditBody/>
     
      </Route>

      <Route exact path="/user/:username">
        
      </Route>

      <Route exact path="/sign">
      <Signup/>
      </Route>

      <Route exact path="/log">
      <Login/>
      </Route>

      <Route exact path="/addPost">
        <AddPost/>
      </Route>

    </>
  );
};



export default Main;