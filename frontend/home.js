import React, { PureComponent } from 'react';
import styled from 'styled-components';

import FullImageBlock from './components/Block/FullImgBlock';
import IndexNav from './components/Nav/IndexNav';
import { renderNavItems } from './components/Nav/NavItems';

import bg from './assets/img/bg.jpg';

const NavItemsBlock = styled.div`
  position: absolute;
  right: 0;
  top: 92%;
  width: 100%;
  height: 8%;

  display: flex;
  align-items: center;
  color: ${props => props.theme.color.mainGreen};
  background-color: rgba(255, 255, 255, .5);

  > a:first-child {
    margin-left: 50%;
  }

  &.active {
    position: fixed;
    top: 0;
  }
`;

class Home extends PureComponent {
  state = {}

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const st = document.body.scrollTop || document.documentElement.scrollTop || 0;
    const vh = window.innerHeight;
    if (st > (0.91 * vh)) {
      this.nav.classList.add('active');
    } else {
      this.nav.classList.remove('active');
    }
  }

  render() {
    return (
      <main>
        <FullImageBlock src={bg}>
          <NavItemsBlock
            innerRef={(node) => {
              // this callback executes before componentDidMount
              if (node !== null) { this.nav = node; }
            }}
          >
            {renderNavItems()}
          </NavItemsBlock>
          <IndexNav />
        </FullImageBlock>
      </main>
    );
  }
}

export default Home;
