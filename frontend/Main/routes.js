import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/containers/Home';
import Story from '@/containers/Story';
import Promise from '@/containers/Promise';
import Product from '@/containers/Product';
import KnowHow from '@/containers/Know-how';
import About from '@/containers/About';

import ScrollToTopRoute from '~/components/Route/ScrollToTopRoute';

const NoMatch = () => <div><h1>What are you fucking doing!!!</h1></div>;

const root = (
  <Switch>
    <ScrollToTopRoute exact path="/" component={Home} />
    <ScrollToTopRoute path="/story" component={Story} />
    <ScrollToTopRoute path="/promise" component={Promise} />
    <ScrollToTopRoute path="/product" component={Product} />
    <ScrollToTopRoute path="/know-how" component={KnowHow} />
    <ScrollToTopRoute path="/about" component={About} />

    {/* when none of the above match, <NoMatch> will be rendered */}
    <Route component={NoMatch} />
  </Switch>
);

export default root;
