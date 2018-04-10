import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { navConfig } from '../../config';

const Wrapper = styled.footer`  
  color: #333;
  width: 80%;
  margin: 3% auto;
  font-size: .8rem;
  text-align: center;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled(NavLink)`
  margin: 1rem 5%;
`;

const renderLinks = () => navConfig.map(({ to, tagName }) =>
  <Link key={tagName} to={to}>{tagName}</Link>
);

export default () => (
  <Wrapper>
    <p>Copyright © 2018 Dozo Tea Life. All Rights Reserved.</p>
    <hr />
    <LinksContainer>
      {renderLinks()}
    </LinksContainer>
  </Wrapper>
);
