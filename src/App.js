import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageTransition from './components/PageTransition';

import Header from './layout/Header';

import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <PageTransition>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </PageTransition>
        </div>
      </Router >
    );
  }
}

export default App;
