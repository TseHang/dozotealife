import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

class App extends Component {
  state={}

  render() {
    return (
      <Fragment>
        <Nav />
        {this.props.children}
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(App);
