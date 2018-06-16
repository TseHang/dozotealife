import React from 'react';
import styled from 'styled-components';

import { getTheme } from '~/style/helper';
import Icon from './components/Icon';
import NavLists from './components/NavLists';

const Wrapper = styled.nav`
  position: fixed;
  top: ${getTheme('layout.top')};
  left: ${getTheme('layout.left')};
`;

const IconContainer = styled.div`
  cursor: pointer;
  width: 6vh;
  max-width: 80px;
  &:hover {
    ${Icon} {
      &:nth-child(1) {
        width: 100%;
      }
      &:nth-child(2) {
        width: 0%;
      }
      &:nth-child(3) {
        width: 100%;
      }
    }
  }
`;

const Nav = () => (
  <Wrapper>
    <IconContainer>
      <Icon color="orange" />
      <Icon color="orange" />
      <Icon color="orange" className="short" />
    </IconContainer>
    <NavLists open />
  </Wrapper>
);

export default Nav;
