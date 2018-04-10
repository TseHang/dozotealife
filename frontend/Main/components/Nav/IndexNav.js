import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import DefaultNavWrapper from './components/NavWrapper';

import logo from '../../../assets/img/nav-logo.png';
import rope from '../../../assets/img/rope-icon.png';

const LinkWithFilter = styled(NavLink)`
  transition: filter .2s ease-out;
  filter: opacity(.6) grayscale(1);
  &:hover {
    filter: opacity(1) grayscale(0);
  }
`;

const NavWrapper = styled(DefaultNavWrapper)`
  background-color: transparent;
`;

const Logo = styled(LinkWithFilter)`
  margin: .3rem 5%;
`;

const RopeIcon = styled(LinkWithFilter)`
  position: absolute;
  right: 5%;
  width: 1.3em;
`;


export default class AnimNav extends PureComponent {
  state = {}

  render() {
    return (
      <NavWrapper>
        <Logo to={'/'}>
          <img src={logo} />
        </Logo>
        <RopeIcon to={'/'}>
          <img src={rope} />
        </RopeIcon>
      </NavWrapper>
    );
  }
}
