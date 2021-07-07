import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss'
import App from './App';
import { GoalContextProvider } from './contexts'


ReactDOM.render(

  <React.StrictMode>
    <GoalContextProvider>
      <App />
    </GoalContextProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


