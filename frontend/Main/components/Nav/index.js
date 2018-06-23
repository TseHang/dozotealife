import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';

import { getTheme, media } from '~/style/helper';
import IconBar from './components/IconBar';
import NavLists from './components/NavLists';

const Wrapper = styled.nav`
  cursor: pointer;
  position: fixed;
  padding-top: ${getTheme('layout.top')};
  padding-left: ${getTheme('layout.left')};
  width: 10vh;
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

  ${media('pad')} {
    width: 8vh;
  }
`;

class Nav extends PureComponent {
  state = { open: false }

  openNavLists = () => this.setState({ open: true })
  closeNavLists = () => this.setState({ open: false });

  render() {
    return (
      <Fragment>
        <Wrapper onClick={this.openNavLists}>
          <IconBar color="orange" />
          <IconBar color="orange" />
          <IconBar color="orange" className="short" />
        </Wrapper>
        <NavLists
          open={this.state.open}
          onClose={this.closeNavLists}
        />
      </Fragment>
    );
  }
}

export default Nav;
