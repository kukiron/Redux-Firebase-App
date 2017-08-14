import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InviteContainer from './containers/invite_container';
import store from './store/store';
import "../stylesheets/main.scss";

const main = (
  <Provider store={store}>
    <MuiThemeProvider>
      <InviteContainer />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(main, document.getElementById('container'));
