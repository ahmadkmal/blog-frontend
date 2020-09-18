import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Main from './components/main/main.js';
import { connect } from 'react-redux';
import * as actions from './store/reducers/auth';

function App(props) {
  useEffect(() => {
    props.load();
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />

      <Main />

      <Footer />
     
    </>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  load: () => dispatch(actions.load()),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
