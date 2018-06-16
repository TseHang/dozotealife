import React from 'react';

import styled from 'styled-components';
import NavItem from './components/NavItem';
import { navConfig } from '../../config';

const Block = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-left: auto;
`;

/**
 * render NavItems
 */
const renderNavItems = () => navConfig.map(({ to, tagName }) =>
  <NavItem key={tagName} text={tagName} to={to} />
);

const NavItems = () => (
  <Block>
    {renderNavItems()}
  </Block>
);

export {
  renderNavItems,
  NavItems,
};
