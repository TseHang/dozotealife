import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { getTheme } from '~/style/helper';
import IconBar from './components/IconBar';
import NavLists from './components/NavLists';

const Wrapper = styled.nav`
  position: fixed;
  padding-top: ${getTheme('layout.top')};
  padding-left: ${getTheme('layout.left')};
`;

const IconContainer = styled.div`
  cursor: pointer;
  width: 6vh;
  max-width: 80px;
  &:hover {
    ${IconBar} {
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

class Nav extends PureComponent {
  state = { open: false }

  openNavLists = () => this.setState({ open: true })
  closeNavLists = () => this.setState({ open: false });

  render() {
    return (
      <Wrapper>
        <IconContainer onClick={this.openNavLists}>
          <IconBar color="orange" />
          <IconBar color="orange" />
          <IconBar color="orange" className="short" />
        </IconContainer>
        <NavLists
          open={this.state.open}
          onClose={this.closeNavLists}
        />
      </Wrapper>
    );
  }
}

export default Nav;
