import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Import CSS reset and Global Styles
import './style/global-style';

const Nav = () => <div>Nav</div>;
const NoMatch = () => <div>NoMatch</div>;
const Footer = () => <div>footer</div>;

const Home = () => <div>home</div>;
const Health = () => <div>yoyoman3445</div>;
const Know = () => <div>Know</div>;

const root = (
  <Router basename="/">
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
  </Router>
);

ReactDOM.render(root, document.getElementById('react_root'));
