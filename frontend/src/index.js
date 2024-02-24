import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer bodyStyle={{ fontFamily: "Roboto" }} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
