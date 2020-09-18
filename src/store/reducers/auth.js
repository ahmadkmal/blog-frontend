import superagent from 'superagent';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';
const API = process.env.API_URL || 'https://blog-pwc.herokuapp.com';

const initialState = {
  loggedIn: false,
  user: {},
  token: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'setUserIn':
    return {...state, user:payload.user , loggedIn : true, token: payload.token };
  case 'logout':
    cookie.save('auth', 'token',{ path: '/' });
    return initialState;

  default:
    return state;
  }
};

export const setUserIn = (obj) => { 
  return {
    type: 'setUserIn',
    payload: obj,
  };
};
export const logout = () => {
  return {
    type: 'logout',
    payload: 'payload',
  };
};
const validateToken = (token,dispatch) => {
  try {
    console.log('token--->',token);
    let user = jwt.verify(token, 'ahmadkmal');
    superagent.get(`${API}/token`)
      .set('Content-Type', 'application/json' )
      .set('Authorization',`Bearer ${token}`)
      .then(data => {
        console.log('token state',data.body);
        if(data.body === 'token'){
          
          dispatch(logout());
        }
      });
    cookie.save('auth', token, { path: '/' });
    dispatch(setUserIn({user,token}));

  } catch (ex) {
    dispatch(logout());
    console.log('token Validation error',ex);
  }
};

export const signup = (username, password, email, role) => dispatch => {
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-cache',
  };
  axios.post(`${API}/signup`, { username, password, email, role }, options).then(res => {
    validateToken(res.data.token,dispatch);
  }).catch(e => {
    console.log('ERROR SIGNUP');
    console.error();
  });

};


export const login = (username, password) => dispatch => {
  console.log('username, password---------------->',username, password);
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Basic ${btoa(`${username}:${password}` )}`},
    cache: 'no-cache',
  };
  
  axios.post(`${API}/signin`, {}, options).then(res => {
    console.log('res--->',res);
    validateToken(res.data.token,dispatch);
  }).catch(e => {
    console.log('ERROR SIGNUP');
    console.error();
  });
  
};

export const load = () => dispatch => {
  const cookieToken = cookie.load('auth');
  const token = cookieToken || null;
  validateToken(token,dispatch);
};


