import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import { NavItems } from './NavItems';

import rope from '../../assets/img/rope-icon.png';
import logo from '../../assets/img/nav-logo.png';

const LogoWrapper = styled(NavLink)`
  margin: .3rem 5%;
`;

const Logo = styled.img`
`;

const RopeIcon = styled.img`
  cursor: pointer;
  position: absolute;
  width: 1.3em;
  right: 5%;
`;

const TabNav = ({
  isHome = false,
}) => (
  <NavWrapper>
    <LogoWrapper to={'/'}>
      <Logo src={logo} />
    </LogoWrapper>
    { isHome ? '' : <NavItems /> } {/* Maybe merge IndexNav Later...*/}
    <RopeIcon src={rope} />
  </NavWrapper>
);

export default TabNav;

TabNav.propTypes = {
  isHome: PropTypes.bool,
};
