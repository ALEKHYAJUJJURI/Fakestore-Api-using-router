import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import { ContextComponent } from './useContext/useContext';

import { CoockiesDemo } from './coockies&reducer/coockies';
import { CookiesProvider } from 'react-cookie';
import { ReducerDemo } from './coockies&reducer/reducer';
import { UseEffectMountDemo } from './customhooks/mount';
import { ClassDemo } from './classComponent/class';
import { Porfolio } from './Routs/routes';
import { RouteAPI } from './Route-API/routesApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <CookiesProvider>
      <RouteAPI/>
    </CookiesProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
