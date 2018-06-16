import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/containers/Index';

const NoMatch = () => <div><h1>What are you fucking doing!!!</h1></div>;

const root = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/story" component={() => <h2>Dozo 故事</h2>} />
    <Route path="/promise" component={() => <h2>Dozo 承諾</h2>} />
    <Route path="/product" component={() => <h2>找茶趣</h2>} />
    <Route path="/know-how" component={() => <h2>茶百科</h2>} />

    {/* when none of the above match, <NoMatch> will be rendered */}
    <Route component={NoMatch} />
  </Switch>
);

export default root;
