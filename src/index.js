import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store'; // Ensure you have the store imported

ReactDOM.render(
  <Provider store={store}>   {/* Wrap App inside Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);