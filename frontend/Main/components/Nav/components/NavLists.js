import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import { fromProps, media } from '~/style/helper';
import { Row as raw, Block as block } from '~/components/Grid/Grid';

import closeIcon from '~/assets/Icon/close.svg';
import logoWithTitle from '~/assets/Logo/logoWithTitle.png';

import { navConfigs } from '../config';

const Wrapper = styled.nav`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: ${props => (props.open ? '0vw' : '-100vw')};
  background-color: ${fromProps('color')};
  transition: all .2s ease-in;
  color: #fff;
  z-index: 1000;
`;

const Row = styled(raw)`
  height: ${fromProps('height')};
  background-color: ${fromProps('color')};
  justify-content: ${fromProps('justify')};
  margin: 0;
  padding: 1rem;
`;

const CloseIcon = styled.img`
  cursor: pointer;
  width: 5vh;
  transform: rotate(0deg);
  &:hover {
    opacity: .8;
    transform: rotate(180deg);
    transition: all .3s ease-in;
  }
`;

const HomeLogo = styled.img`
  width: 22vh;
`;

const CuteImg = styled.img`
  width: 50%;
  ${media('pad')} {
    display: none;
  }
`;

const Block = styled(block)`
  justify-content: space-around;
  align-items: flex-start;
`;

const NavLink = {
  Label: styled.h2`
    padding-left: 1rem;
    letter-spacing: 3px;
    transform: skewX(-10deg);
  `,

  Text: styled.p`
    margin-top: 5px;
    font-size: .9rem;
    font-weight: 300;
    transform: skewX(-10deg);
  `,
};

const NavLists = ({
  open,
  onClose,
}) => (
  // TODO： 出現的動畫(時間差)
  <Wrapper open={open} color="orange">
    <Row color="white" height="12vh" justify="space-between" inline>
      <CloseIcon onClick={onClose} src={closeIcon} />
      <Link to="/" onClick={onClose}>
        <HomeLogo src={logoWithTitle} />
      </Link>
    </Row>
    <Row color="orange" height="88vh" justify="flex-end">
      <CuteImg alt="cute-img" />
      <Block>
        {
          navConfigs.map(nav => (
            <Link to={nav.path} onClick={onClose} key={nav.path}>
              <NavLink.Label>{nav.label}</NavLink.Label>
              <NavLink.Text>{nav.text}</NavLink.Text>
            </Link>
          ))
        }
      </Block>
    </Row>
  </Wrapper>
);

NavLists.propTypes = {
  open: bool,
  onClose: func,
};

export default withRouter(NavLists);
