import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../style/theme';

import Home from './home';
import Health from './health';
import Footer from './components/Footer';

// Import CSS reset and Global Styles
import '../style/global-style';

const Nav = () => <div>Nav</div>;
const Know = () => <div>Know</div>;

const NoMatch = () => <div><h1>What are you fucking doing!!!</h1></div>;

const root = (
  <Router>
    <ThemeProvider theme={theme}>
      <div style={{ position: 'relative' }}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/health" component={Health} />
          <Route path="/know-how" component={Know} />
          <Route path="/product/:tea" component={() => <h2>123</h2>} />

          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  </Router>
);

ReactDOM.render(root, document.getElementById('react_root'));
