import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Block = styled(NavLink)`
  margin: 0 3%;
`;

const Leaf = styled.div`
  /* [TODO]: animation leaf */
`;

const TagName = styled.p`
  font-weight: 500;
`;

const NavItem = ({
  text,
  to,
}) => (
  <Block to={to}>
    <Leaf />
    <TagName>{text}</TagName>
  </Block>
);

export default NavItem;

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
