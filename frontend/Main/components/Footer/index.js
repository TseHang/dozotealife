import React from 'react';
import styled from 'styled-components';
import { Link as link } from 'react-router-dom';

import { Row } from '~/components/Grid/Grid';
import { getTheme, media } from '~/style/helper';

const Wrapper = styled.footer`  
  width: 100%;
  margin-top: 3%;
  padding: 1%;
  font-size: .8rem;
  text-align: center;
  line-height: 1.5;
  color: white;
  background-color: ${getTheme('color.gray')};
  ${media('pad')} {
    padding: 3% 1%;
  }
`;

const Link = styled(link)``;

const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: white;
  margin: 0 2%;
`;

export default () => (
  <Wrapper>
    <Row inline center>
      <Link to="/about">關於我們</Link>
      <Divider />
      <Link to="mailto: dozotealife@gmail.com">
        聯絡 Dozo
      </Link>
    </Row>
    <p>Copyright © 2018 Dozo Tea Life. All Rights Reserved.</p>
  </Wrapper>
);
