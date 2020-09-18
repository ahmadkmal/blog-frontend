import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Post from '../post';
import Auth from '../auth';
import Signup from '../signup';
import Login from '../signin';
import EditBody from '../editBody'
const Main = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Route exact path="/">
        <Home/>
        <Auth>
        <img className='addpost' src='https://pngimg.com/uploads/plus/plus_PNG115.png' alt='add post'/>
        </Auth>
      </Route>


      <Route exact path="/post/:id">
        <Post/>
        <Auth>
        <img className='addpost' src='https://pngimg.com/uploads/plus/plus_PNG115.png' alt='add post'/>
        </Auth>
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

      <Route exact path="/post">
    
      </Route>

    </>
  );
};



export default Main;