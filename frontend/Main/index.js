import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

import App from '@/containers/App';
// import history from '@/providers/history';
import routes from '@/routes';

import theme from '../style/theme';

// Import CSS reset and Global Styles
import '../style/global-style';

const root = (
  <ThemeProvider theme={theme}>
    <Router>
      <App>
        {routes}
      </App>
    </Router>
  </ThemeProvider>
);

render(root, document.getElementById('react_root'));
