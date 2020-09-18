import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Show from '../show';
import * as actions from '../../store/reducers/auth';
import Form from 'react-bootstrap/Form';

const Signin = (props) => {
    const [role , setrole]= useState('');
    const [email , setemail]= useState('');
    const [password , setpassword]= useState('');
    const [username , setusername]= useState('');
    const [name , setname]= useState('');
      const handleChange = e => {
        console.log('signuo---->', state);
        setState({...state,})[e.target.name] = e.target.value;
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        props.signup(state.username, state.password, state.email, state.role);
        setRedirect(true);
      };
        return (
            <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>name</label>
                <input type="text" className="form-control" placeholder="name" onChange={setname}/>
            </div>

            <div className="form-group">
                <label>username</label>
                <input type="text" className="form-control" placeholder="name" onChange={setusername}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={setemail}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={setpassword}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
        );
    
}
const mapStateToProps = (state) => {
    console.log('state------>', state);
    return {
      loggedIn: state.auth.loggedIn,
      user: state.auth.user,
    };
  };
  
  
  const mapDispatchToProps = (dispatch, getState) => ({
    signup: (username, password, email, role) => dispatch(actions.signup(username, password, email, role)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Signin);