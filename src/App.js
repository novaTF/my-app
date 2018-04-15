import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
// import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { createRoutes } from './routes';
import configureStore from './store';
import 'normalize.css';
import 'github-markdown-css';
import 'antd/dist/antd.css';
// import Home from './containers/Home';
// import About from './components/About';
// import logo from './logo.svg';
import './App.css';

export const history = createHistory();
export const store = configureStore(history, {})
const routes = createRoutes(store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app-container">
            {routes.map(r =>
              <Route key={r.path} {...r}/>
            )}
          </div>
        </ConnectedRouter>

      </Provider>
    );
  }
}

export default App;
