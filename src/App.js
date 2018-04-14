import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
          <div>
            <a href="/abc">首页</a>
            <a href="/abc2">关于</a>
            修改测试最新代码321321
            <br />
            <Link to="abc"> 首页</Link>
            <Link to="abc2">关于</Link>
            <br />
            <Route component={Home} />
            <Route path="/abc" component={Home} />
            <Route path="/abc2" component={About} />
          </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
