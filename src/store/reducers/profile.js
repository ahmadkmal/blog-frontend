import axios from 'axios';
const API = process.env.API_URL || 'https://blog-pwc.herokuapp.com';
const initialState = {
  user: {},
  posts: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log('action ---->',payload,type);
  switch (type) {
  case 'setUser':
    return {...state,user : payload};
  case 'setPosts':
    return {...state,posts : payload};
  case 'clear':
    console.log('clear......----->');
    return initialState;
  default:
    return state;
  }
};

export const setUser = payload => {
  return {
    type: 'setUser',
    payload: payload,
  };
};

export const clear = () => {
  console.log('clear....222222..----->');
  return {
    type: 'clear',
    payload: 'nan',
  };
};
export const setPosts = payload => {
  return {
    type: 'setPosts',
    payload: payload,
  };
};

export const getUser = (username , token) => dispatch => {
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' 
      ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  console.log('token inside profile / options---->',token,options,api);
  axios.get(`${API}/${username}`, options)
    .then(data => {
      console.log('getuser',data.data.user);
      dispatch(setUser(data.data.user));
    });
};


export const getPosts = (username ,token ) => dispatch => {
  const options = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`},
    cache: 'no-cache',
  };
  axios.get(`${API}/${username}`,options)
    .then(data => {
      console.log('getposts',data.data.data||[]);
      dispatch(setPosts(data.data.data||[]));
    });
};


