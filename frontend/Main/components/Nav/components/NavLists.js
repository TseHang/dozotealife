import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: ${props => (props.open ? '0%' : '-100%')};
`;

const NavLists = ({
  open,
  onClose,
}) => (
  <Wrapper open={open}>
    123
  </Wrapper>
);

NavLists.propTypes = {
  open: bool,
  onClose: func,
};

export default NavLists;

