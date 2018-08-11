import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { string, func, shape } from 'prop-types';
import { propTypesOfLocation } from '~/propTypes';

class ScrollToTopRoute extends React.Component {
  static propTypes = {
    path: string,
    component: func,
    location: shape(propTypesOfLocation),
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.path === this.props.location.pathname &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} render={props => (<Component {...props} />)} />;
  }
}

export default withRouter(ScrollToTopRoute);
