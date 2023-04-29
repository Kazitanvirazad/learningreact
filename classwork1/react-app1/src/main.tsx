import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProps from './AppProps';
import AppAlertChildComponent from './AppAlertChildComponent';
import AppPropsFunctions from './AppPropsFunctions';
import ButtonExampleApp from './ButtonExampleApp';
import 'bootstrap/dist/css/bootstrap.css';
import AlertDismissApp from './AlertDismissApp';
import AlertDismissAppSol2 from './AlertDismissAppSol2';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AlertDismissAppSol2 />
  </React.StrictMode>,
);
