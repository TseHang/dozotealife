import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import { fromProps } from '~/style/helper';
import { Row as raw, Block as block } from '~/components/Grid/Grid';

import closeIcon from '~/assets/Icon/close.svg';
import logoWithTitle from '~/assets/Logo/logoWithTitle.png';

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: ${props => (props.open ? '0vw' : '-100vw')};
  background-color: ${fromProps('color')};
  transition: all .2s ease-in;
  color: #fff;
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
  @media (max-width: 720px) {
    display: none;
  }
`;

const Block = styled(block)`
  justify-content: space-around;
  align-items: flex-end;
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
  // TODO： 出現的動畫
  <Wrapper open={open} color="orange">
    <Row color="white" height="12vh" justify="space-between" inline>
      <CloseIcon onClick={onClose} src={closeIcon} />
      <Link to="/" onClick={onClose}>
        <HomeLogo src={logoWithTitle} />
      </Link>
    </Row>
    <Row color="orange" height="88vh" justify="flex-end">
      <CuteImg alt="cute-img" />
      <Block center>
        <Link to="/story" onClick={onClose}>
          <NavLink.Label>故事</NavLink.Label>
          <NavLink.Text>一杯溫暖的茶，一段有溫度的時間</NavLink.Text>
        </Link>
        <Link to="/promise" onClick={onClose}>
          <NavLink.Label>故事</NavLink.Label>
          <NavLink.Text>一杯溫暖的茶，一段有溫度的時間</NavLink.Text>
        </Link>
        <Link to="/product" onClick={onClose}>
          <NavLink.Label>故事</NavLink.Label>
          <NavLink.Text>一杯溫暖的茶，一段有溫度的時間</NavLink.Text>
        </Link>
        <Link to="/know-how" onClick={onClose}>
          <NavLink.Label>故事</NavLink.Label>
          <NavLink.Text>一杯溫暖的茶，一段有溫度的時間</NavLink.Text>
        </Link>
        <Link to="/about-us">
          <NavLink.Label>故事</NavLink.Label>
          <NavLink.Text>一杯溫暖的茶，一段有溫度的時間</NavLink.Text>
        </Link>
      </Block>
    </Row>
  </Wrapper>
);

NavLists.propTypes = {
  open: bool,
  onClose: func,
};

export default withRouter(NavLists);
