import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';




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
        
      </Route>

      <Route exact path="/sign">
       
      </Route>

      <Route exact path="/post">
    
      </Route>

    </>
  );
};



export default Main;