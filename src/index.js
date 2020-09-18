import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store/store.js';


function Main() {
  return(
    <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
  );
  
}
ReactDOM.render(<Main />, document.getElementById('root'));


