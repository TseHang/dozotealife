import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/containers/Home';
import Story from '@/containers/Story';
import Promise from '@/containers/Promise';
import Product from '@/containers/Product';
import KnowHow from '@/containers/Know-how';

const NoMatch = () => <div><h1>What are you fucking doing!!!</h1></div>;

const root = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/story" component={Story} />
    <Route path="/promise" component={Promise} />
    <Route path="/product" component={Product} />
    <Route path="/know-how" component={KnowHow} />

    {/* when none of the above match, <NoMatch> will be rendered */}
    <Route component={NoMatch} />
  </Switch>
);

export default root;
